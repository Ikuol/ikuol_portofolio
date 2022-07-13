const mysql=require('mysql');
const express=require('express');
const path=require('path');
const myconnection=require('express-myconnection');


const optionsBD={
    host: 'localhost',
    user: 'root', //important
    password: '',
    database:'portofolio'
};

const app = express();

//extraction des données du formulaire
app.use(express.urlencoded({extended:false}));

//middleware pour la connexion avec la bd
app.use(myconnection(mysql,optionsBD,'pool'));

app.use(express.static('../'));

    app.set('views', path.join(__dirname, '../'));
    app.set('view engine', 'ejs');


        app.get('/', (req, res)=>{
            res.status(200).render('index');
        });

        app.get('/spinner', (req, res)=>{
            res.status(200).render('spinner');
        });

        app.get('/contact', (req, res)=>{
            res.status(200).render('contact');
        });

        app.listen(3001,()=>{
            console.log('listening on port:3001');
        });

    

app.post("/save",(req,res)=>{

    let email=req.body.email;
        let name=req.body.name;
            let message=req.body.message;
        
    //insertion d'une donnée
        req.getConnection((err,connection)=>{
            if(err){
                console.log(err);
            } else{
                connection.query(
                    'INSERT INTO infos(name,email,message) VALUES(?,?,?)', [name,email,message],
                (err,result)=>{
                     if(err){
                        console.log(err);
                        }
                     else{
                        res.status(300).redirect('/');
                             }
                        }
                     );
                 }
             });
        });



    

   

    