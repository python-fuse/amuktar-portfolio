"use server";

import fs from "fs";
import path from "path";
import data from "../../data/database.json";
import { MYINFO } from "@/utils/definitions";
import { merge } from "lodash";

export const getData = async () => {
  return data;
};

// Function to write data to the database
export const writeData = async (data: MYINFO) => {
  const filePath = path.join(process.cwd(), "data", "database.json");

  // Step 1: Read old data
  const oldData = await getData();

  // Step 2: Deep merge old data with new data
  const newData = merge(oldData, data);
  console.log("newData", newData);

  // Step 3: Write the updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));

  return newData;
};
