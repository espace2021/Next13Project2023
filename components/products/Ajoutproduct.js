'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

import {buildFormData} from "../../utils/ConvertFormData";

const Ajoutproduct = ({scategories}) => {

  const router = useRouter()

const [reference, setReference] = useState("");
const [designation, setDesignation] = useState("");
const [prix, setPrix] = useState("");
const [marque, setMarque] = useState("");
const [qtestock, setQtestock] = useState("");
const [imageart, setImageart] = useState("");
const [scategorieID, setScategorieID] = useState("");

const [file, setFile] = useState("");

const [validated, setValidated] = useState(false);

const handleSubmit = async(event) => { console.log(file[0].file)
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    const article={
    reference: reference,
    designation: designation,
    prix: prix,
    marque: marque,
    qtestock: qtestock,
    imageart: file[0].file,
    scategorieID: scategorieID
    }
    const formData = new FormData();
    buildFormData(formData, article);
    await ( fetch('https://backendmulter2023.onrender.com/api/articles', {
      method: 'POST',
      body: formData
  }))
    .then(res=>{
    console.log("Insert OK",res);
    setReference("");
    setDesignation("");
    setPrix("");
    setMarque("");
    setQtestock("");
    setImageart("");
    setScategorieID("");
    setValidated(false);
    router.push("/products/cards")
    })
    .catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })
    }
    setValidated(true);
    };

  return (
    <div>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
 
  <div className="container w-100 d-flex justify-content-center">
  <div>
  
  <div className='form mt-3'>
  <Row className="mb-2">
  <Form.Group as={Col} md="6" >
  <Form.Label >Référence *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Référence"
  value={reference}
  onChange={(e)=>setReference(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Référence Article
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="6">
  <Form.Label>Désignation *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Désignation"
  value={designation}
  onChange={(e)=>setDesignation(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Saisir Désignation
  </Form.Control.Feedback>
  </Form.Group>
  </Row>
  <Row className="mb-2">
  <Form.Group className="col-md-6">
  <Form.Label>Marque *</Form.Label>
  <InputGroup hasValidation>
  <Form.Control
  type="text"
  required
  placeholder="Marque"
  value={marque}
  onChange={(e)=>setMarque(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
  Marque Incorrecte
  </Form.Control.Feedback>
  </InputGroup>
  </Form.Group>
  <Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<div style={{width:200, height:250}}>
              <FilePond
              files={file}
              allowMultiple={false}
              onupdatefiles={setFile}
              labelIdle='<span class="filepond--label-action">Browse One or Drag and Drop</span>'
            
            />
       </div>
</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>S/Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}
>
<option></option>
{scategories?.map((scat)=><option key={scat._id}
value={scat._id}>{scat.nomscategorie}</option>)}
</Form.Control>
</Form.Group>
</Row>
</div>
</div>
</div>

<Button type="submit">Enregistrer</Button>

</Form>
    </div>
  )
}

export default Ajoutproduct
