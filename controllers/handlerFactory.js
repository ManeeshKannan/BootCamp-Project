const firebase = require('../db');
const catchAsync = require('../utils/catchAsync');

var database = firebase.database();

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await database.ref(Model).push(req.body);
    res.status(201).json({
      status: 'sucess',
      data: doc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await database.ref(Model).once('value', (snapshot) => {
      const Data = [];
      snapshot.forEach((key) => {
        Data.push({ id: key.key, data: key.val() });
      });8 

      res.status(201).json({
        status: 'sucess',
        data: Data,
      });
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await database.ref(Model).get(req.params);

    res.status(201).json({
      status: 'sucess',
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {


    const ref = database.ref(Model);
    const usersRef = ref.child(req.params.id).update(req.body)


    res.status(203).json({
      status: 'sucess',
       data: usersRef,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //get data id
    let Id;
    if(Model==='arrayUsers'){
     Id = req.body.emailId;
    }else {
       Id = req.body.productName;
    }
    //geting all data from data base
    const Data = [];
    const doc = await database.ref(Model).once('value', (snapshot) => {
      snapshot.forEach((key) => {
        Data.push({ data: key.val() });
      });
    });

    //get the particular data index
    let index;
    Data.findIndex((entry, i) => {
      if (entry.data.emailId === `${Id}`) {
        index = i;
      }
    });

    //delete the data
    Data.splice(index, 1);

    //tranffering final data
    const result = [];
    Data.forEach((el) => {
      result.push(el.data);
    });

    //updating data
    const ref = database.ref(Model);
    const usersRef = ref.set(result);

    res.status(204).json({
      status: 'sucess',
    });
  });

// const onec=[{
//   emailId: "test5@exapmle.com",
//   password: 'test1@exapmle',
//   type: 'user',
//   username: ' test'
// },{
//   emailId: "test1@exapmle.com",
//   password: 'test1@exapmle',
//   type: 'user',
//   username: ' test'
// },{
//   emailId: "test2@exapmle.com",
//   password: 'test1@exapmle',
//   type: 'user',
//   username: ' test'
// },{
//   emailId: "test4@exapmle.com",
//   password: 'test1@exapmle',
//   type: 'user',
//   username: ' test'
// },{
//   emailId: "tes3t@exapmle.com",
//   password: 'test1@exapmle',
//   type: 'user',
//   username: ' test'
// }]
