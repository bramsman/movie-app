
class Movie {
    constructor(title, stock) {
      this.title = title;
      this.stock = stock; // Number of copies of the movie available
    }
  
    rent() {
      if (this.stock > 0) {
        this.stock -= 1;
        return true;
      } else {
        return false;
      } 
    }
  
    returnMovie() {
      this.stock += 1;
    }
  }
  
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentals = [];
    }
  
    rentMovie(movie) {
      if (movie.rent()) {
        this.rentals.push(movie);
        console.log(`${this.name} has successfully rented ${movie.title}.`);
      } else {
        console.log(`${movie.title} is currently out of stock.`);
      }
    }
  
    returnMovie(movie) {
      if (this.rentals.includes(movie)) {
        const index = this.rentals.indexOf(movie);
        this.rentals.splice(index, 1);
        movie.returnMovie();
        console.log(`${this.name} has returned ${movie.title}.`);
      }
    }
  }
  
  class Inventory {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    findMovie(title) {
      return this.movies.find(movie => movie.title === title);
    }
  }
  
  class Store {
    constructor(name) {
      this.name = name;
      this.inventory = new Inventory();
      this.customers = [];
    }
  
    addMovieToInventory(movie) {
      this.inventory.addMovie(movie);
      console.log(`${movie.title} has been added to Cart.`);
    }
  
    registerCustomer(customer) {
      this.customers.push(customer);
      console.log(`Welcome to movie Land: ${customer.name}`);
    }
  
    rentMovieToCustomer(movieTitle, customerName) {
      const customer = this.customers.find(c => c.name === customerName);
      const movie = this.inventory.findMovie(movieTitle);
  
      if (customer && movie) {
        customer.rentMovie(movie);
      } else {
        console.log(`Transaction failed: Movie or customer not found.`);
      }
    }
  
    returnMovieFromCustomer(movieTitle, customerName) {
      const customer = this.customers.find(c => c.name === customerName);
      const movie = this.inventory.findMovie(movieTitle);
  
      if (customer && movie) {
        customer.returnMovie(movie);
      } else {
        console.log(`Transaction failed: Movie or customer not found.`);
      }
    }
  }

  
  
  const myStore = new Store("Geneysc Video Rentals");
  
  // Adding movies
  const shawshank = new Movie("Titanic", 5);
  myStore.addMovieToInventory(shawshank);
  const Kambili = new Movie("Tomorrow Never Dies", 2);
  myStore.addMovieToInventory(Kambili);
  
  // Registering customers
  const john = new Customer("Abraham Uno");
  myStore.registerCustomer(john);
  const jane = new Customer("Uzoamaka Eze");
  myStore.registerCustomer(jane);
  
  // Renting movies
  myStore.rentMovieToCustomer("Tomorrow Never Dies", "Abraham uno"); // Successful rent if movie is in stock
  myStore.rentMovieToCustomer("Titanic", "Uzoamaka Eze"); // Successful rent if movie is in stock
  
  // Returning movies 
  john.returnMovie(Kambili);
  
  