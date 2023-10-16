export enum EBodyStyles {
  SUV = 'SUV',
  MINIVAN = 'Minivan',
  PICKUP_TRUCK = 'Pickup Truck',
  SPORTS_CAR = 'Sports Car',
  HATCHBACK = 'Hatchback',
  SEDAN = 'Sedan',
}

export enum ETransmissions {
  AUTOMATIC = 'Automatic',
  MANUAL = 'Manual',
}

export enum EEngineTypes {
  GAS = 'Gas',
  HYBRID = 'Hybrid',
  ELECTRIC = 'Electric',
}

export enum ESeats {
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
}

export interface ICar {
  id: string;
  slug: string;
  title: string;
  price: {
    perDay: {
      retail: {
        amount: number;
        currency: string;
      };
      discount?: {
        amount: number;
        currency: string;
      };
    };
  };
  image: {
    src: string;
    alt: string;
  };
  specs: {
    bodyStyle: EBodyStyles;
    engineType: EEngineTypes;
    transmission: ETransmissions;
    capacity: {
      seats: string;
    };
  };
  description: string[];
  features: string[];
  rating: string;
  reviews?: string;
  unlimitedMileage?: boolean;
}
