import * as React from "react"
import { makeStyles } from '@mui/styles';
import {Grid, MenuItem,TextField, Typography,Box} from '@mui/material';
import {Avatar} from "@mui/material"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const useStyles = makeStyles((theme)=>({
  root: {
    color:'#292c32',
    background:'#f4f5f8',
    padding:'30px 100px 30px 100px'
  },
  TextField:{
    borderWidth:'1px',
    borderColor:'#000',
    background:'none !important',
  }
}));

const membre = [
    {id:1,nom:"Sous l'océan",url:"https://imgs.search.brave.com/CNkq2DNsA19tsmoiDr9dns-92ztxF4zh-7sNCRsxYZY/rs:fit:512:512:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9p/Y29uczgvd2luZG93/cy04LzUxMi9UcmF2/ZWwtU2VhLVdhdmVz/LWljb24ucG5n"},
    {id:2,nom:'Sous terre',url:"https://imgs.search.brave.com/bqK3JhHl_agLW7KXvoDfCx_GB8YBchCHXdnvUDj_e6I/rs:fit:1172:615:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tWFdLTC0tbzFW/WGsvV2o5NGwycWt5/TkkvQUFBQUFBQUJS/SXMvV3lpbEhTb3lY/OUFzZFBsNVVCNWZn/WWhIcUx0LWptTVpB/Q0tnQkdBcy93MTIw/MC1oNjMwLXAtay1u/by1udS9jYXJyaWVy/ZSUyQnNvdXRlcnJh/aW5lLmpwZw"},
    {id:3,nom:"En orbite",url:"https://imgs.search.brave.com/Z6NTsVmzoaXS1rXnlzXBIEa7Csn9cW_3-EqCYDW0E3Y/rs:fit:1200:911:1/g:ce/aHR0cHM6Ly9tcmNp/cmN1c3BvbGl0aWN1/cy5maWxlcy53b3Jk/cHJlc3MuY29tLzIw/MTcvMTAvc29sYXIt/c3lzdGVtLW9yYml0/LTIuanBn"},
    {id:4,nom:"Sur la lune",url:"https://imgs.search.brave.com/_8mkkowWS-MoG6ZpE93-WBuroOEYz-sO3Srge0QOqz4/rs:fit:768:768:1/g:ce/aHR0cHM6Ly9maWxl/MS5zY2llbmNlLWV0/LXZpZS5jb20vdmFy/L3NjaWVuY2VldHZp/ZS9zdG9yYWdlL2lt/YWdlcy82LzgvNjgz/OTIvMy1ub3V2ZWF1/eC1teXN0ZXJlcy1z/dXItbHVuZS5qcGc_/YWxpYXM9ZXhhY3Qx/MDI0eDc2OF9s"}
  ];

  const capsule=[
      {id:1,nom:"En or",url:'https://imgs.search.brave.com/EF6ZFVYpaKCpan575Txd7Awjw4VGwUSgRvgKyDKK4j0/rs:fit:1000:872:1/g:ce/aHR0cHM6Ly93d3cu/c3RpY2tlcnMtbXVy/YXV4LmZyL29yaS1z/dGlja2Vycy1jb2Zm/cmUtZXQtcGllY2Vz/LWQtb3ItNTgzMS5q/cGc'},
      {id:2,nom:"En acier",url:'https://imgs.search.brave.com/Rbx5-vxYgbcaANkpIochusdYLK7VEkaBExM4tXz17ao/rs:fit:712:610:1/g:ce/aHR0cDovL2NhdGFs/b2d1ZS5kcm91b3Qu/Y29tL2ltYWdlc3Jl/Zi9wZXJzby9mdWxs/L0xPVC83OC8yMDU4/My8xMTcvQ09GRlJF/LUVOLUZFUi1GT1JH/RS1DTE9VVEUtRU5U/UkVFLURFLVNFUlJV/UkUtRU4tRk9STUUt/REUtUk9TQUNFUy1Q/T0lHTkVFUy1MQVRF/UkFMRVMlMjZIRUxM/SVAtLmpwZw'},
      {id:3,nom:"En cuivre",url:'https://imgs.search.brave.com/8QqXrknyhL_BdRDnIzbVeOlQxySpNLqVoGIMqXL-Fnc/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9jaGVt/aW5kZWNhbXBhZ25l/LmNvbS8xNDk1My10/aGlja2JveF9kZWZh/dWx0L2dyYW5kLWNv/ZmZyZS1tYWxsZS1l/bi1ib2lzLXN0eWxl/LWFuY2llbi00OC1j/bS14LTkwLWNtLXgt/NTYtY20uanBn'}

  ]

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

const  Section_3 = () =>{
    const [secret,setSecret]=React.useState(false)

    const handleSecret = ( )=>{
        setSecret(true)
    }
  const classes = useStyles(); 
  const [price, setPrice] = React.useState(0)


  const validationSchema = Yup.object().shape({
    titre: Yup.string()
      .required('Ce champ est obligatoire'),
    Taille: Yup.string()
      .required('Ce champ est obligatoire'),
    description: Yup.string()
      .required('Ce champ est obligatoire')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const initialState = {
    status:'',
    localisation:'',
    capsule:'',
    date:'',
    taille:'',
    titre:'',
    description:''
  }
  const [stateForm,setStateForm]= React.useState({ ...initialState })
  const [allChecked,setAllChecked]= React.useState([])
  const [allCheckedType,setAllCheckedType]= React.useState([])

  const addPrice = (value,unity) =>{
      if(allChecked.length >= 0 && price >= 0){
        if(allChecked.includes(value) === true && typeof(allChecked) === 'object'){
            setPrice(price-unity)
            const index = allChecked.IndexOf(value)
            console.log(index)
            if(index !== -1){
                const newTabs = allChecked.splice(index,1)
                setAllChecked([...newTabs])
            }
        }else{
            setPrice(price + unity) 
            setAllChecked([...allChecked,value])
        }
      }
  }

  const handleChange = (e) =>{
      switch (e.target.name) {
        case 'status':
              switch (e.target.value) {
                case 'public':
                    addPrice(e.target.value,100)
                    break;
                case 'private':
                    addPrice(e.target.value,300)
                    break;
              }
        break;
        case 'localisation':
            switch (e.target.value) {
                case '1':
                    addPrice(e.target.value,400)
                    break;
                case '2':
                    addPrice(e.target.value,300)
                    break;
                case '3':
                    addPrice(e.target.value,500)
                    break;
                case '4':
                    addPrice(e.target.value,800)
                    break;
            }
        break;
        case 'capsule':
            switch (e.target.value) {
                case '1':
                    addPrice(e.target.value,600)
                    break;
                case '2':
                    addPrice(e.target.value,500)
                    break;
                case '3':
                    addPrice(e.target.value,200)
                break;
            }
        break
    }
    setStateForm({
        ...stateForm,
        [e.target.name]:e.target.value
    })

  }

  return (
        <Box style={{background:'#000',  padding:'30px 100px 100px 100px'}}>
            <form>
                <Grid boxShadow={4}  container style={{ background:'#fff',borderRadius:'10px', padding:'50px 50px 30px 50px'}}>
                    <Grid item sm={5} xs={5}>
                        <Grid container spacing={4}>
                            <Grid item sm={12} xs={12}>
                                <Typography variant="h4" lineHeight={2} fontWeight='bolder'>
                                    Faites votre devis
                                </Typography>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                 <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                        <input type="text"  name="titre" placeholder="Titre de vote capsule" 
                                        onChange={handleChange}
                                        value={stateForm.titre}
                                        {...register('titre')} className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='titre'/>
                                        <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 color-red-500 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                            </svg>
                                        </span>
                                </div>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                 <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                        <input type="text"  name="taille" placeholder="le taillede votre fichier"
                                        value={stateForm.taille}
                                        onChange={handleChange}
                                        {...register('taille')} className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='description'/>
                                        <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                        </span>
                                </div>
                            </Grid>
                            
                            <Grid item sm={6} xs={6}>
                                <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                            <input type="text"  name="description" 
                                            value={stateForm.description}
                                            onChange={handleChange}
                                             {...register('description ')} placeholder="date_disponibilite" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='titre'/>
                                            <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </span>
                                    </div>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                        <input type="text"
                                            onChange={handleChange}
                                          value={stateForm.date}  name="date" placeholder="date_disponibilite"  {...register('disponibilite ')} className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='titre'/>
                                        <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </span>
                                </div>
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                    <FormControl  fullWidth>
                                        <div>
                                            <InputLabel id="demo-multiple-checkbox-label">
                                                <Typography style={{fontSize:12}}>
                                                        Choisissez le lieu
                                                </Typography>
                                                </InputLabel>
                                                <Select
                                                    style={{width:'100%'}}
                                                    labelId="demo-multiple-checkbox-label"
                                                    id="demo-multiple-checkbox"
                                                    name="localisation"
                                                    value={stateForm.localisation}
                                                    onChange={handleChange}
                                                    input={<OutlinedInput label="Tag" />}
                                                    MenuProps={MenuProps}
                                                >
                                                {membre.map((name) => (
                                                <MenuItem key={name.id} value={String(name.id)}>
                                                    <Avatar src={name.url}/>
                                                    <ListItemText primary={"  "+name.nom} />
                                                </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </FormControl>
                                
                            </Grid>
                            <Grid item sm={6} xs={6}>
                            <FormControl  fullWidth>
                                    <div>
                                        <InputLabel id="demo-multiple-checkbox-label">
                                            <Typography style={{fontSize:12}}>
                                                    Choisissez la classe
                                            </Typography>
                                            </InputLabel>
                                            <Select
                                                style={{width:'100%'}}
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                name="capsule"
                                                value={stateForm.capsule}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Tag" />}
                                                MenuProps={MenuProps}
                                            >
                                            {capsule.map((cap) => (
                                            <MenuItem key={cap.id} value={String(cap.id)}>
                                            <Avatar src={cap.url}/>
                                            <ListItemText primary={cap.nom} />
                                            </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sx={{marginTop:'10%'}}>
                        <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"  htmlFor = "deadline" >VISIBILITE</label> 
                                        <select value={stateForm.status}
                                          onChange={handleChange}
                                          name="status"  className = "appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                            <option value={'public'}>Devant</option>
                                            <option value={'private'}>Arrière</option>
                                        </select>
                        </Grid>
                        <Grid xs={12} sx={{marginTop:'10%'}}>
                        <input
                            type='submit'
                            variant="contained" 
                            color="success"
                            style={{
                                textTransform:'lowercase',
                                background:'#c0392b',
                                borderRadius:'80px',
                                color: '#fff',
                                padding:'20px',
                                width:'100%',
                                '&:hover':{
                                        background:'#000',
                                },
                                fontWeight:1000,
                                fontSize:'20px',
                            }}
                            value='Reserver'
                        />
                        </Grid>
                    </Grid>
                    <Grid sm={1} xs={1}>
                    </Grid>
                    <Grid item sm={6} xs={6} style={{background:'#c0392b', borderRadius:'20px'}}>
                        <Box textAlign='center' marginTop='50%'>
                            <Typography variant="h4" color='white'>
                                 Prix à estimer
                            </Typography>
                            <Typography 
                                variant="p"
                                color='white'
                                style={{
                                    fontSize:'40px',
                                    fontWeight:'bolder'
                                }}>
                                {price}$
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
  );
}

export default Section_3