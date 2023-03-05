let useAPI = document.getElementById("useAPI")

fetch("../APIJson/sa.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            useAPI.innerHTML += `
            <div class="col-md-6 mb-5">
              <div class="feature-29012 d-flex">
                <div class="number mr-4"><span><i class="${data[i].icon}"></i></span></div>
                <div>
                  <h3 style="font-family: 'Oswald', sans-serif;">${data[i].title}</h3>
                  <p style="font-family: 'Oswald', sans-serif;">
                    ${data[i].discription}
                  </p>
                </div>
              </div>
            </div>
            `
        }
    })