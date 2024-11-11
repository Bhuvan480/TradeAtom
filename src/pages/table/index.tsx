/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from "@nextui-org/react";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { OptionDataResponse } from "../../models/OptionData";
import { GetOptionData } from "./service";

const MyTable = () => {
  const IsBigScreen = useMediaQuery("(min-width: 1060px)");
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

  const [maxVolume, setMaxVolume] = React.useState(0);
  const [maxOi, setMaxOi] = React.useState(0);
  const [maxCHOI, setMaxCHOI] = React.useState(0);
  const [response, setResponse] = React.useState<OptionDataResponse>();
  const [IsFetched, setIsFetched] = React.useState(false);

  const fontSize = IsBigScreen ? "text-md" : "text-sm";

  const columns = [
    {
      key: "strike_price",
      label: "Strike",
    },
    {
      key: "volume",
      label: "Volume",
    },
    {
      key: "oi",
      label: "OI",
    },
    {
      key: "oich",
      label: "CH OI",
    },
  ];

  React.useEffect(() => {
    async function fetchData() {
      setIsFetched(true);
      const optionData: OptionDataResponse = await GetOptionData();

      console.log("optionData", optionData);
      setResponse(optionData);
      setMaxVolume(optionData.max_volume);
      setMaxOi(optionData.max_oi);
      setMaxCHOI(optionData.max_oich);
      optionData?.data.forEach((item) => {
        if (
          optionData.max_volume === item.volume ||
          optionData.max_oi === item.oi ||
          optionData.max_oich === item.oich
        ) {
          setSelectedKeys((prev) => [
            ...prev,
            optionData.data.indexOf(item).toString(),
          ]);
        }
      });
      setIsFetched(false);
    }

    fetchData();
  }, []);

  const renderCell = React.useCallback(
    (item: any, columnKey: any) => {
      const cellValue = item[columnKey];

      switch (columnKey) {
        case "strike_price":
          return `${cellValue}${item["option_type"]}`;
        case "volume":
          return maxVolume === cellValue ? (
            <Chip color="warning" variant="shadow" radius="md" size="sm">
              {cellValue}
            </Chip>
          ) : (
            cellValue
          );
        case "oi":
          return maxOi === cellValue ? (
            <Chip color="warning" variant="shadow" radius="md" size="sm">
              {cellValue}
            </Chip>
          ) : (
            cellValue
          );
        case "oich":
          return maxCHOI === cellValue || cellValue < 0 ? (
            <Chip
              color={cellValue < 0 ? "danger" : "warning"}
              variant="shadow"
              radius="md"
              size="sm"
            >
              {cellValue}
            </Chip>
          ) : (
            cellValue
          );
        default:
          return cellValue;
      }
    },
    [maxVolume, maxOi, maxCHOI]
  );

  return (
    <Table
      classNames={{ table: `not-italic`, td: fontSize }}
      layout="fixed"
      color="default"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      selectionBehavior="replace"
      aria-label="Example static collection table"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            className="bg-teal-800 text-xl text-primary-500"
            align="center"
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={response?.data || []}
        loadingContent={<Spinner />}
        loadingState={IsFetched ? "loading" : "idle"}
      >
        {(item) => (
          <TableRow key={response?.data.indexOf(item)}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MyTable;
