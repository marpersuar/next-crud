export enum Operator {
  E = '=',
  NE = '!=',
  GT = '>',
  GTE = '>=',
  LT = '<',
  LTE = '<=',
  IN = 'IN',
  BEGINS_WITH = 'BEGINS_WITH',
  CONTAINS = 'CONTAINS',
}

export interface Filter {
  field: string;
  operator: Operator;
  value: string | number | boolean;
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface Sort {
  field: string;
  order: Order;
}

export interface Criteria {
  filters: Filter[];
  sorts: Sort[];
  page: number;
  limit: number;
}
