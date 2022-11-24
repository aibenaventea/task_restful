export interface TaskById {
  _id: { type: String},
  title:  { type: String},
  description: { type: String},
  completed: {type:Boolean},
  createdAt: { type: Date},
  updatedAt: { type: Date},
  __v:{ type: Number}
}

