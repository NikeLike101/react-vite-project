import {FilterPayloadType, SetFilterAltPayloadType} from "./types.ts";


export const isFilterAltPayload = (filterPayload: FilterPayloadType) => {
    if (filterPayload?.field !== undefined) return filterPayload as SetFilterAltPayloadType

}