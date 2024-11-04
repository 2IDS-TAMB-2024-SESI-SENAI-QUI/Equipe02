function showChain() {
    const chainInput = document.getElementById('chainInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const chains = {
        //Alcanos
        "metano": "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/formula-estrutural-do-CH4%20(1).jpg",
        "etano": "https://media.brainly.com.br/image/rs:fill/w:1080/q:75/plain/https://pt-static.z-dn.net/files/d13/ab3109544961434db55558816c738348.png",
        "propano": "https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/de4/aaee2f95d96e64096abd13e99907533e.png",
        "butano": "https://static.todamateria.com.br/upload/57/22/5722256be70ea-butano.jpg",
        "pentano": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE54aZEL3WaPIFC5vErTSXwC0LVh--669r9Q&s",
        "hexano": "https://media.brainly.com.br/image/rs:fill/w:1920/q:75/plain/https://pt-static.z-dn.net/files/dee/d6ae54faf4882ecdc724f0a3fcbbfcd3.png",
        "heptano": "https://www.euston96.com/wp-content/uploads/2021/02/Formula-estructural-del-heptano-300x89.png",
        "octano": "https://pt-static.z-dn.net/files/dd2/8ddd4e12f0c93281f1c50f841e85aa80.jpg",
        "1 2 dimetilbenzeno": "https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/d6a/5bf6a0390c831ae1d1ab9336aeedcc46.png",
    

        // Alcenos
        "eteno": "https://www.infoescola.com/wp-content/uploads/2018/10/img_5bd0d64605834.png",
        "buteno": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfmBR-__bs_0O_qpdZ6vAu5yUQYgSiJKqaw&s",

        // Alcinos
        "etino": "https://media.brainly.com.br/image/rs:fill/w:750/q:75/plain/https://pt-static.z-dn.net/files/dbb/073be5767e3f0b5cd6381bd295a0a15a.png",
        "propino": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Propyne-2D-flat.png/200px-Propyne-2D-flat.png",
        "butino": "https://pt-static.z-dn.net/files/de2/d4fe5167d30fc2afdf1060396e38e6cb.jpg",

        // Aromáticos
        "benzeno": "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/de35e7ec75f511e7cdd3a8b91ac52c14.jpg",
        "naftaleno": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgedXFsrPmPRdvXCIngjRs6bM9kTxDLIgPT8uq4RIsWbRBTssqFVs0K8inNmr3za9YmyZ2Gt6DN4vJ6vWRVa6B_MsSBcKjATNpEDE4s5nJ6IrwDTO-40JvlX2FjhxyL5x96sMflvsDhbjgt/?imgmax=800"
    };
    if (chains[chainInput]) {
        const img = document.createElement('img');
        img.src = chains[chainInput];
        img.alt = chainInput;
        img.classList.add('chain-image');
        resultDiv.appendChild(img);
    } else {
        resultDiv.innerHTML = `<p>Essa cadeia não foi encontrada. Tente novamente!</p>`;
    }
}
