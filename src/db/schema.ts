import {
  pgTable,
  serial,
  text,
  integer,
  decimal,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const escrows = pgTable("escrows", {
  id: serial("id").primaryKey(),
  objectID: text("object_id").notNull(),
  initialSharedVersion: integer("initial_shared_version").notNull(),
  typeX: text("type_x").notNull(),
  typeY: text("type_y").notNull(),
  owner: text("owner").notNull(),
  frequency: integer("frequency").notNull(),
  dividedAmount: integer("divided_amount").notNull(),
  lastClaimed: integer("last_claimed").notNull(),
  filledOrders: integer("filled_orders").notNull(),
  balanceX: integer("balance_x").notNull(),
  balanceY: integer("balance_y").notNull(),
  decimalsX: integer("decimals_x").notNull(),
  decimalsY: integer("decimals_y").notNull(),
  priceEnabled: boolean("price_enabled"),
  minPrice: integer("min_price").notNull(),
  maxPrice: integer("max_price").notNull(),
  depositTime: integer("deposit_time").notNull(),
  endTime: integer("end_time").notNull(),
  totalSpent: integer("total_spent").notNull(),
  totalWithdrawnAmount: integer("total_withdrawn_amount").notNull(),
  executedTime: integer("executed_time").notNull(),
});
