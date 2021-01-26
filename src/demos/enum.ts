/*
An enum is a structure that proposes several allowed values for a variable.
It is a way to constrain variable values by defining specific possible entries.
When not explicitly assigned, the values are all constants starting from 0 for the first item and increasing by one until the end.
*/
export enum xEnum {
  ChoiceA, // 0
  ChoiceB = 100,
  ChoiceC, // 101
  ChoiceD = xEnum.ChoiceC, // 101
}
