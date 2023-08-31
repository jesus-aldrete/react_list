export interface IDataRow {
	availability: boolean,
	day_rate    : string,
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