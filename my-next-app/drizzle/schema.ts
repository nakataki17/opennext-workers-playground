import { sqliteTable, AnySQLiteColumn, text, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const foo = sqliteTable("foo", {
	bar: text().default("Hey!").notNull(),
	age: integer().default(30),
});

