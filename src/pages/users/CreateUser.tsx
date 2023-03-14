import React from 'react'
import { UserForm } from '../../feature/users'

const CreateUser = () => {
  return (
    <section className="section">
    <div className="row">
        <div className="col-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Users</a></li>
                    <li className="breadcrumb-item"><a href="#">System Users</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-header">
                    <h4>Create New User</h4>
                </div>
                <div className="card-body">
                    <UserForm/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CreateUser