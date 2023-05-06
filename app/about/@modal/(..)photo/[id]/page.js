import React from "react";
import Modal from "@/components/products/modal";
export default function PhotoModal({ params: { id: photoId } }) {

  return (
 <Modal>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <img
    alt=""
    src="/images/avatarF.png"
  
  />
  </div>
    <div>
  Name : ......................
  </div>
  <div>
  Email : .....................
  </div>
  </div>
 </Modal> 
  );
}