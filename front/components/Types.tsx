export enum EStateOrder {
	NoOrder = 0,
	Acending = 1,
	Decending = 2,
}

export interface IDataRow {
	availability: boolean,
	day_rate    : number,
	name        : string,
	specialities: Array<string>,
}

export interface IQueryAttsContractors {
	attributes: IDataRow,
}

export interface IQueryDataContractors {
	data: Array<IQueryAttsContractors>,
}

export interface IQueryContractors {
	contractors: IQueryDataContractors,
}

export interface IQueryResultContractors {
	data: IQueryContractors,
}

export interface IRequestOrder {
	value: string,
	state: EStateOrder,
}