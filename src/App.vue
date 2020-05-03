<template>
  <div id="app" class="container-fluid">
    <header class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <a class="navbar-brand" href="#">Chippa</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-3">
              <a class="nav-link text-dark" href="#">Login <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-outline-success text-success" href="#">Get Started <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="row">
      <aside class="border-right col-1">
        <ul class="d-flex flex-column justify-content-between text-center">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Why us? <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Pricing</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Plugins</a>
          </li>
        </ul>
      </aside>
      <section class="col-11">
        <div class="row mt-5">
          <div class="container mt-5">
            <h1 class="text-center">Our Plans</h1>
            <p class="text-center text-secondary mt-3">Choose a plan that best fits your requirements!</p>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold text-danger text-center">Beginner</h5>
                    <hr>
                    <div class="row">
                      <div class="amount container text-center d-flex justify-content-center">
                        <p class="align-self-start">GHS</p>
                        <p class="d-flex align-self-center amount-figure align-items-center">5</p>
                        <p class="align-self-end" id="duration">/month</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="container text-center">
                        <p>Basic Options</p>
                        <p>1TB Storage</p>
                        <p>Opportunity to share</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }

}
</script>

<style>
  aside {
    width: 70px;
    height: 100vh;
  }

  aside ul {
    height: 600px;
    padding-top: 150px;
    padding-left: 0;
  }

  aside > ul li {
    transform: rotate(-90deg);
    white-space: nowrap;
    list-style: none;
    margin-bottom: 50px;
  }

  .amount {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .amount-figure {
    font-size: 90px;
    font-weight: bolder;
    height: 70px;
  }

  .amount-figure > p {
    height: 90px;
    margin-bottom: 0;
    align-items: center;
  }

  #duration {
    align-items: start;
  }
</style>
