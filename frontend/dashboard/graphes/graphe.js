
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGU6G7isPLgFzhiIQtxYCG3WiOcUnOABg",
    authDomain: "adw-dashboard-37062.firebaseapp.com",
    databaseURL: "https://adw-dashboard-37062-default-rtdb.firebaseio.com",
    projectId: "adw-dashboard-37062",
    storageBucket: "adw-dashboard-37062.appspot.com",
    messagingSenderId: "84191582397",
    appId: "1:84191582397:web:8fdfea804ebbf78ed9bfd4"
};

firebase.initializeApp(firebaseConfig);

const ctx = document.getElementById('myChart');
const ctxBar = document.getElementById('myChartBar');

let grapheListDate = [];
let grapheListNbre = [];
let grapheListNbreAttaque = [];
let grapheListNbreSuspect = [];


let anomalieData; // Le capteur de presence
let dateAnomalie;
let nombreAnomalie;
let nombreAttaque;
let nombreSuspect;
let janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre;
$(document).ready(function(){
    var database = firebase.database();

    database.ref('anomalieDate').on("value", function(snap){
        janvier = snap.val().janvier;
        fevrier = snap.val().fevrier;
        mars = snap.val().mars;
        avril = snap.val().avril;
        mai = snap.val().mai;
        juin = snap.val().juin;
        juillet = snap.val().juillet;
        aout = snap.val().aout;
        septembre = snap.val().septembre;
        octobre = snap.val().octobre;
        novembre = snap.val().novembre;
        decembre = snap.val().decembre;

    });
    database.ref('dateAnomalie').on("value", function(snap){
        grapheListDate.push(snap.val())

    });
    database.ref('nombreAnomalie').on("value", function(snap){
        nombreAnomalie = snap.val()
        grapheListNbre.push(nombreAnomalie)
        document.getElementById("nbreAnomalie").innerText = nombreAnomalie;
    });
    database.ref('nombreAttaque').on("value", function(snap){
        grapheListNbreAttaque.push(snap.val())
        document.getElementById("nombreAttaque").innerText = snap.val();
    });
    database.ref('nombreSuscpect').on("value", function(snap){
        grapheListNbreSuspect.push(snap.val())
        document.getElementById("nombreSuspect").innerText = snap.val();
    });

});


setTimeout(function () {

    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ["janvier", "fevrier", 'mars', "avril", "mai",'juin', 'juillet', 'Août', 'septembre', 'octobre', 'novembre', 'decembre'],
            datasets: [{
                label: '# anomalies',
                data: [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'
                }
            }
        },

    });


}, 4000)


