import React, { useState } from 'react'
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io"
import {RiEditCircleLine} from "react-icons/ri"
import { db } from '../config/firebase'
import {deleteDoc,doc } from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {

  const {isOpen,onClose,onOpen}=useDisclouse(false);


  const deleteContact =async (id)=>{
      try {
          await deleteDoc(doc(db,"contacts",id));
          toast.success("contact deleted successfully")
      } catch (error) {
          
      }
  }
  

  return (
    <>
    <div key={contact.id}
    className="flex items-center bg-yellow-100 justify-between p-1 rounded-lg"
    >
      <div className="flex gap-2">
      <HiOutlineUserCircle
    className="text-4xl text-orange-500"
    />

    <div className="">
      <h2 className="font-medium">{contact.name}</h2>
      <p className="text-sm">{contact.email}</p>
    </div>
      </div>
    <div className="flex text-3xl">
      <RiEditCircleLine onClick={onOpen}
      className='cursor-pointer' />
      <IoMdTrash onClick={()=> deleteContact(contact.id)}  className="text-orange-500 cursor-pointer"/>
    </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  
  )
}

export default ContactCard;