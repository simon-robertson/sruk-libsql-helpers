export function castRow(result) {
    if (result.rows.length > 0) {
        return result.rows[0]
    }

    return null
}

export function castRows(result) {
    return result.rows
}

export function sqlite(chunks, ...values) {
    return {
        sql: chunks.join("?"),
        args: values,
    }
}

export function unix() {
    return Math.floor(Date.now() * 0.001)
}
