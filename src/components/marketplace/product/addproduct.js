// import React, { Component } from 'react';
// import axios from 'axios';
// import firebase from "./firebase";



// class AddProduct extends Component {
//     constructor(props) {
//         super(props);


//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         document.body.classList.add("no-sroll");
//         this.state = {
//             productName: '',
//             brand: '',
//             supplier: '',
//             category: '',
//             description: '',
//             imgURL: '',
//             files: ''

//         }


//     }

//     handleChange = (files) => {
//         this.setState({
//             files: files
//         })
//     }

//     handleUpload = () => {
//         let bucketName = 'images'
//         let file = this.state.files[0]
//         let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
//         let uploadTask = storageRef.put(file)
//         uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//             () => {
//                 let downloadURL = uploadTask.snapshot.downloadURL
//             })

//     }

//     showIMG = () => {
//         let storageRef = firebase.storage().ref()
//         let spaceRef = storageRef.child('images/' + this.state.files[0].name)
//         storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
//             console.log(url)
//             this.setState({
//                 imgURL: url
//             })
//             document.getElementById('new-img').src = url

//         })
//     }

//     onChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     onClear() {
//         window.location.reload(false);
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         let storageRef = firebase.storage().ref()
//         let spaceRef = storageRef.child('images/' + this.state.files[0].name)
//         storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
//             console.log(url)
//             this.setState({
//                 imgURL: url
//             })



//             let productItem = {
//                 productName: this.state.productName,
//                 brand: this.state.brand,
//                 supplier: this.state.supplier,
//                 category: this.state.category,
//                 description: this.state.description,
//                 imageURL: this.state.imgURL,



//             }
//             console.log('Data to send', productItem);
//             axios.post('http://localhost:8089/product/create', productItem)
//                 .then(response => {
//                     store.addNotification({
//                         title: "Gift Item Upload",
//                         message: "Success",
//                         type: "success",
//                         container: "top-right",
//                         insert: "top",
//                         animationIn: ["animated", "fadein"],
//                         animationOut: ["animated", "fadeout"],

//                         dismiss: {
//                             duration: 2000,
//                             showIcon: true
//                         },
//                         width: 400,

//                     })
//                 }).catch(error => {
//                     console.log(error.message);
//                     alert(error.message);
//                 })

//         })




//     }

//     render() {
//         return (

//             <div className="row bg-secondary bg-opacity-10">
//                 <div className="col col-lg-2"></div>
//                 <div className="col mb-3">


//                     <div class="col-md-8 offset-md-2">
//                         <br />
//                         <div>


//                             <div class="card card-outline-secondary bg-secondary bg-opacity-95 text-white" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
//                                 <div class="card-body">

//                                     <h3 class="text-center">Add New Product Items</h3>

//                                     <div >
//                                         <div class="col-12 ">
//                                             <label for="inputEmail4" class="form-label">Product Name</label>
//                                             <input type="text" class="form-control" id="productName" name="productName" value={this.state.productName} onChange={this.onChange} required />
//                                         </div>
//                                         <div class="col-12">
//                                             <label for="inputEmail4" class="form-label">Product Brand</label>
//                                             <input type="email" class="form-control" id="brand" name="brand" value={this.state.brand} onChange={this.onChange} required />
//                                         </div>
//                                         <div class="col-12">
//                                             <label for="inputState" class="form-label">Product Category</label>
//                                             <select id="category" class="form-select" name="category" value={this.state.category} onChange={this.onChange} >
//                                                 <option selected>Choose...</option>
//                                                 <option value="Transformer">Transformer</option>
//                                                 <option value="Motors">Motors</option>
//                                                 <option value="BMS">BMS</option>
//                                                 <option value="Elevator">Elevator</option>

//                                             </select>
//                                         </div>
                                        

//                                         <label for="floatingTextarea" >Product Description</label>
//                                         <div class="form-floating">

//                                             <textarea class="form-control" id="floatingTextarea" name="description" value={this.state.description} onChange={this.onChange}></textarea>

//                                         </div>
//                                         <div class="col-12 pt-3 pb-3">
//                                             <input type="file" onChange={(e) => { this.handleChange(e.target.files) }} />
//                                             <button type="button" class="btn btn-light" onClick={this.handleUpload}><i class="fa fa-upload" aria-hidden="true"></i></button>
//                                             {/* <button onClick={this.showIMG}>Show</button>  */}
//                                             <img id="new-img" />
//                                             <h6></h6>
//                                         </div>


//                                         <div className="row">
//                                             <div class="col-md-6">
//                                                 <div class="d-flex justify-content-center ">
//                                                     <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Submit  <i class="fa fa-check-circle"></i></button>
//                                                 </div>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <div class="d-flex justify-content-center ">
//                                                     <button type="submit" onClick={this.onClear} class="btn btn-primary">Clear  <i class="fas fa-sync" ></i> </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }

// export default AddProduct;