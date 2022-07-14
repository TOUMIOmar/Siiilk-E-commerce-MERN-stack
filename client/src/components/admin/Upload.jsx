
import "../admin/upload.css";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import Dashbord from "./Dashbord"
import { addProduct } from "../../actions/productActions";
const Upload = () => {
  const dispatch = useDispatch();
   const { register, handleSubmit , reset } = useForm()
   const [file, setFile] = useState()
   const addNewProduct = (data) => {
     dispatch(addProduct({...data, file}));
     reset();
     alert("Votre produit a été ajouté avec succès !")
      };
   
    return (
      <div style={{display:"flex"}}>
      <Dashbord/>
      <div className="mainz_container">
<div className="textz-center">
<div className="formz-style-5"><h1 id ="testz">Entrée de stock</h1>
        <form onSubmit={handleSubmit(addNewProduct)}>
          <fieldset id="fildz">
          <legend id ="legedz"><span className="numberz">1</span> Information sur le produit</legend >
            <label htmlFor="fname"> Title:</label><br />
            <input type="texte" id="titlezz" {...register('title')} required /><br />
            <label htmlFor="description">Description:</label><br />
            <input type="texte" id="titlezz" {...register('desc')}  required /><br /><br />
            <label htmlFor="qty"> Quantiter:</label><br />
            <input type="Number" id="titlezz"  {...register('qty')}  required /><br />
            <label htmlFor="Categorie"> Categorie:</label><br />
            <input type="texte" id="titlezz"  {...register('categorie')}  required /><br />
            <label htmlFor="price">Prix:</label><br />
            <input type="Number" id="titlezz" {...register('price')}  required /><br /><br />
            
            <label className="labelz">Taille</label>
  <form action='' className='formz'>
  <div className="fieldz">
 
        <ul className="checkboxzez">
          <li className="checkboxz">
            <input className="checkboxz-input" id="choice-0" name="choice" type="checkbox" defaultValue={0} />
            <label id="select" className="checkboxz-label" htmlFor="choice-0">S</label>
          </li>
          <li className="checkboxz">
            <input className="checkboxz-input" id="choice-1" name="choice" type="checkbox" defaultValue={1} />
            <label id="select" className="checkboxz-label" htmlFor="choice-1">M</label>
          </li>
          <li className="checkboxz">
            <input className="checkboxz-input" id="choice-2" name="choice" type="checkbox" defaultValue={2} />
            <label id="select" className="checkboxz-label" htmlFor="choice-2">L</label>
          </li>
          <li className="checkboxz">
            <input className="checkboxz-input" id="choice-3" name="choice" type="checkbox" defaultValue={3} />
            <label id="select" className="checkboxz-label" htmlFor="choice-3">XL</label>
          </li>
          <li className="checkboxz">
            <input className="checkboxz-input" id="choice-4" name="choice" type="checkbox" defaultValue={4} />
            <label  id="select" className="checkboxz-label" htmlFor="choice-4">XXL</label>
          </li>
        </ul>
        </div>
        </form>  
            
  <label className="labelz-2">Couleur</label>
  <form action='' class='formz'>
  <div className="fieldz">
        <ul className="checkboxzez1">
          <li className="checkboxz1">
            <input className="checkboxz-input1" id="choice-5" name="choice" type="checkbox" defaultValue={5} />
            <label id="select1" className="checkboxz-label1" htmlFor="choice-5">Rouge</label>
          </li>
          <li className="checkboxz1">
            <input className="checkboxz-input1" id="choice-6" name="choice" type="checkbox" defaultValue={6} />
            <label id="select1" className="checkboxz-label1" htmlFor="choice-6">Bleu</label>
          </li>
          <li className="checkboxz1">
            <input className="checkboxz-input1" id="choice-7" name="choice" type="checkbox" defaultValue={7} />
            <label id="select1" className="checkboxz-label1" htmlFor="choice-7">Noir</label>
          </li>
          <li className="checkboxz1">
            <input className="checkboxz-input1" id="choice-8" name="choice" type="checkbox" defaultValue={8} />
            <label id="select1" className="checkboxz-label1" htmlFor="choice-8">Blanc</label>
          </li>
          <li className="checkboxz1">
            <input className="checkboxz-input1" id="choice-9" name="choice" type="checkbox" defaultValue={9} />
            <label  id="select1" className="checkboxz-label1" htmlFor="choice-9">Gris</label>
          </li>
        </ul>
        </div>
        </form>
          </fieldset>
          <fieldset>
            <legend id ="legedz"><span className="numberz">2</span>Information Additionnelle</legend >
            <textarea  id ="messagy"name="field3" placeholder="Remarques" defaultValue={""} />
          </fieldset>
          <fieldset>
            <legend id ="legedz"><span className="numberz">3</span><label htmlFor="image">Télécharger une image</label><br /> </legend >
            <input id="imze" type="file" accept='image/*' onChange={(e)=>setFile(e.target.files[0])}  required /><br /><br />
          </fieldset>
          <input  className="ad_submit" type="submit" defaultValue="Apply"  alert="Produit ajouter avec succes"/>
        </form>
      </div>
      </div>
</div>
</div>
    );
};
export default Upload;