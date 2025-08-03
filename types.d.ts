import { InStatement, InValue, ResultSet } from "@libsql/client"

type BaseRow = {
    id: number
    /** Unix timestamp */
    created_at: number
    /** Unix timestamp */
    updated_at: number
}

export type Row<T, E = BaseRow> = T & E

export type Rows<T, E = BaseRow> = Row<T, E>[]

export function castRow<T, E = BaseRow>(result: ResultSet): Row<T, E> | null

export function castRows<T, E = BaseRow>(result: ResultSet): Rows<T, E>

export function sqlite(chunks: TemplateStringsArray, ...values: InValue[]): InStatement

export function unix(): number
