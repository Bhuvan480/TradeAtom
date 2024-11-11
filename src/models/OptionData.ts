// Interface for the individual option data
export interface OptionData {
    ask: number;
    bid: number;
    fyToken: string;
    ltp: number;
    ltpch: number;
    ltpchp: number;
    oi: number; // Open Interest
    oich: number; // Open Interest Change
    oichp: number; // Open Interest Change Percent
    option_type: "CE" | "PE"; // Call or Put
    prev_oi: number; // Previous Open Interest
    strike_price: number;
    symbol: string;
    volume: number; // Trading Volume
  }
  
  // Interface for the overall data response
  export interface OptionDataResponse {
    data: OptionData[];
    max_volume: number;
    max_oi: number;
    max_oich: number;
    Last_Up: string; // Last update timestamp
    Expiry: string; // Expiry info
    max_volume_symbol: string;
    max_oi_symbol: string;
    max_oich_symbol: string;
  }
  
  