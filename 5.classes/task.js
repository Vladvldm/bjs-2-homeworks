"use strict";

/* --- Задача №1 --- */

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }
}

/* --- Задача №2 --- */

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index][type] === value) {
        return this.books[index];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index].name === bookName) {
        return this.books.splice([index], 1)[0];
      }
    }
    return null;
  }
}

/* --- Задача 3 Журнал успеваемости --- */

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}

	addMark(mark, subject) {
		if ((mark < 2) || (mark > 5)) {
			return;
		}
		if (!(subject in this.marks)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!(subject in this.marks)) {
			return 0;
		}
		let sum = this.marks[subject].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjectArray = Object.keys(this.marks);
		if (subjectArray.length === 0) {
			return 0;
		}
		let sum = subjectArray.reduce((accumulator, currentValue) => accumulator + this.getAverageBySubject(currentValue), 0);
		return sum / subjectArray.length;
	}
}