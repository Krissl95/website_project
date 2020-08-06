import React from 'react'
import FileUploader from 'react-firebase-file-uploader'
import './styles.css'

const firebase = require("firebase");

class AdminPanel extends React.Component {

    constructor() {
        super();

        this.state = {
            kunder: null,
            fileUrl: '',
            matplan: '',
            treningsplan: ''
        }
    }

    componentDidMount() {
        firebase.firestore().collection('users').get().then( snapshot => {
            const kunder = []
            snapshot.forEach( doc => {
                const data = doc.data()
                kunder.push(data)
            })
            this.setState({
                kunder: kunder
            })
            console.log(this.state.kunder)
        })
        .catch( error => console.log(error))
    }


    render() {
        return(
            <div className={"main-div"}>
                <h4>Oversikt over kunder</h4>
                <table>
                    <tbody>
                        <tr><th>Email</th><th>Matplan</th><th>Treningsplan</th></tr>
                        {   
                            this.state.kunder ? this.state.kunder.map((kunde , index) => {
                                this.uploadMatplan = (e) => {
                                    const file = e.target.files[0]
                                    const storageRef = firebase.storage().ref('users/' + kunde.email + '/matplan/')
                                    const fileRef = storageRef.child(file.name)
                                    fileRef.put(file).then(() => {
                                        this.setState({
                                            fileUrl: fileRef.getDownloadURL(),
                                            matplan: file.name
                                        })
                                        const userObj = {
                                            email: kunde.email,
                                            matplan: file.name,
                                            treningsplan: this.state.treningsplan
                                        };
                                        firebase.firestore().collection('users').doc(kunde.email).set(userObj).then(() => {
                                            console.log(userObj)
                                        })
                                    })
                                }
                                this.uploadTreningsplan =  (e) => {
                                    const file = e.target.files[0]
                                    const storageRef = firebase.storage().ref('users/' + kunde.email + '/treningsplan/')
                                    const fileRef = storageRef.child(file.name)
                                    fileRef.put(file).then(() => {
                                        this.setState({
                                            treningsplan: file.name
                                        })
                                        const userObj = {
                                            email: kunde.email,
                                            matplan: this.state.matplan,
                                            treningsplan: file.name
                                        };
                                        firebase.firestore().collection('users').doc(kunde.email).set(userObj).then(() => {
                                            console.log(userObj)
                                        })
                                    })
                                }
                                return(
                                    <tr key={index}>
                                        <td>{kunde.email}</td>
                                        <td>
                                            <form>
                                                <input type="file" onChange={this.uploadMatplan} />
                                            </form>
                                        </td>
                                        <td>
                                            <form>
                                                <input type="file" onChange={this.uploadTreningsplan} />
                                            </form>
                                        </td>
                                    </tr>
                                )
                            }) : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminPanel;