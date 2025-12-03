import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return of(
      JSON.parse(`{
  "kind": "books#volumes",
  "totalItems": 1000000,
  "items": [
    {
      "kind": "books#volume",
      "id": "FrRNO6t51DMC",
      "etag": "5B7m/d1t4u4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/FrRNO6t51DMC",
      "volumeInfo": {
        "title": "Physics For Dummies",
        "authors": [
          "Steven Holzner"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2006-02-10",
        "description": "Does just thinking about the laws of motion make your head spin? Does studying electricity short your circuits? Do the complexities of thermodynamics cool your enthusiasm? Thanks to this book, you don’t have to be Einstein to understand physics. As you read about Newton's Laws, Kepler's Laws, Hooke's Law, Ohm's Law, and others, you’ll appreciate the For Dummies law: The easier we make it, the faster people understand it and the more they enjoy it! Whether you're taking a class, helping kids with homework, or trying to find out how the world works, this book helps you understand basic physics. It covers: Measurements, units, and significant figures Forces such as displacement, speed, and acceleration Vectors and physics notation Motion, energy, and waves (sound, light, wave-particle) Solids, liquids, and gases Thermodynamics Electromagnetism Relativity Atomic and nuclear structures Steven Holzner, Ph.D. earned his B.S. at MIT and his Ph.D. at Cornell, where he taught Physics 101 and 102 for over 10 years. He livens things up with cool physics facts, real-world examples, and simple experiments that will heighten your enthusiasm for physics and science. The book ends with some out-of-this world physics that will set your mind in motion: The possibility of wormholes in space The Big Bang How the gravitational pull of black holes is too strong for even light to escape May the Force be with you!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780471792253"
          },
          {
            "type": "ISBN_10",
            "identifier": "047179225X"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 387,
        "printType": "BOOK",
        "categories": [
          "Science"
        ],
        "averageRating": 4.5,
        "ratingsCount": 7,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.3.3.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=FrRNO6t51DMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=FrRNO6t51DMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=FrRNO6t51DMC&pg=PA159&dq=angular&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=FrRNO6t51DMC&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Physics_For_Dummies.html?hl=&id=FrRNO6t51DMC"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Physics_For_Dummies-sample-pdf.acsm?id=FrRNO6t51DMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=FrRNO6t51DMC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e veloc- ity vector , ω . Figure 10-2 : \u003cb\u003eAngular\u003c/b\u003e velocity points in a perpendicu- lar direction to the circle . ω Now you can master the \u003cb\u003eangular\u003c/b\u003e velocity vector . You know that its magnitude is w , the \u003cb\u003eangular\u003c/b\u003e speed of an object in&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "qys8zgEACAAJ",
      "etag": "qO5pjzR/r1c",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/qys8zgEACAAJ",
      "volumeInfo": {
        "title": "Angular For Dummies",
        "subtitle": "A Comprehensive Beginner's Guide to Angular.js",
        "authors": [
          "Rufus Stewart"
        ],
        "publishedDate": "2021-02-16",
        "description": "Coding with AngularJS For DummiesWell, you're in good hands !But we have a long road, you and me, with lots of things to learn: ).We're living exciting times in Web development. There is a new Angular. A complete rewrite of the good old AngularJS. Why a complete rewrite? Was AngularJS 1.x not enough?I like the old AngularJS very much. In our small company, we have built several projects with it, contributed code to the core framework, trained hundreds of developers (yes, really), and even written a book about it (in French, but that still counts).AngularJS is incredibly productive once you have mastered it. Despite all of this, it doesn't preventus from seeing its weaknesses. AngularJS is not perfect, with some very difficult concepts to grasp, and traps hard to avoid.Most of all, the Web has changed since AngularJS was conceived. JavaScript has changed. ***New frameworks have emerged, with great ideas, or better implementation. We are not the kind of developers to tell you that you should use this tool instead of that one. We just happen to know some tools very well, and know what fits the project. AngularJS was one of those tools, allowing usto build well-tested web applications, and to build them fast. We also tried to bend it where it didn'tfit. Don't blame us, it happens to the best of us.Will Angular be the tool we will use without hesitation in our future projects? It's hard to say right now, because the framework is really young and the ecosystem only just blooming.But Angular has a lot of interesting points, and a vision that few other frameworks have. It has been designed for the Web of tomorrow, with ECMAScript 6, Web Components and Mobile in mind.When it was first announced, I was, like many, sad at first that the 2.0 version would not be a simple update (I'm sorry if you're just learning about it).***But I was also eager to see what solution the talented Google team would come up with.So I started to write this ebook, pretty much after the first commits, reading the design docs, watching the conference videos, reviewing every commit since the beginning. When I wrote my first ebook, about AngularJS 1.x, it was already a stable and known beast. This one is very different, it started when Angular was not even clear in the minds of its designers. Because I knew I wouldlearn a lot, not only about Angular but also about the concepts that would shape the future of Web development, some of which have nothing to do with Angular. And I did. I had to dig a lot about some of these concepts, and I hope that you will enjoy the journey of learning about them, and how they relate to Angular, as much as I did.The ambition of this ebook is to evolve with Angular. If it turns out that Angular is the great framework we hope, you will receive updates with the best practices and some new features as they emerge (and with fewer typos, because, despite our countless reviews, there are probably some left...). And I would love to hear back from you - if some chapters aren't clear enough, if you spot a mistake or if you have a better way for some parts.I'm fairly confident about the code samples, though, as they are all in a real project, with several hundred unit tests. It was the only way to write an ebook with a newborn framework, and to beable to catch all the problems that inevitably arose with each release.Even if you are not convinced by Angular in the end, I'm pretty sure you will have learnt a thing or two along your read.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9798709919594"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 204,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=qys8zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=qys8zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=qys8zgEACAAJ&dq=angular&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=qys8zgEACAAJ&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Angular_For_Dummies.html?hl=&id=qys8zgEACAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=qys8zgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Coding with AngularJS For DummiesWell, you&#39;re in good hands !But we have a long road, you and me, with lots of things to learn: ).We&#39;re living exciting times in Web development."
      }
    },
    {
      "kind": "books#volume",
      "id": "1JHWtAEACAAJ",
      "etag": "+pbCaLSOZwI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/1JHWtAEACAAJ",
      "volumeInfo": {
        "title": "Angular 6 for Enterprise-Ready Web Applications",
        "authors": [
          "Doguhan Uluca"
        ],
        "publishedDate": "2018-05-28",
        "description": "A hands-on guide with a minimalist and flexible approach that enables quick learning and rapid delivery of cloud-ready enterprise applications with Angular 6 Key Features Explore tools and techniques to push your web app to the next level Master Angular app design and architectural considerations Learn continuous integration and deploy your app on a highly available cloud infrastructure in AWS Book Description Angular 6 for Enterprise-Ready Web Applications follows a hands-on and minimalist approach demonstrating how to design and architect high quality apps. The first part of the book is about mastering the Angular platform using foundational technologies. You will use the Kanban method to focus on value delivery, communicate design ideas with mock-up tools and build great looking apps with Angular Material. You will become comfortable using CLI tools, understand reactive programming with RxJS, and deploy to the cloud using Docker. The second part of the book will introduce you to the router-first architecture, a seven-step approach to designing and developing mid-to-large line-of-business applications, along with popular recipes. You will learn how to design a solid authentication and authorization experience; explore unit testing, early integration with backend APIs using Swagger and continuous integration using CircleCI. In the concluding chapters, you will provision a highly available cloud infrastructure on AWS and then use Google Analytics to capture user behavior. By the end of this book, you will be familiar with the scope of web development using Angular, Swagger, and Docker, learning patterns and practices to be successful as an individual developer on the web or as a team in the Enterprise. What you will learn Create full-stack web applications using Angular and RESTful APIs Master Angular fundamentals, RxJS, CLI tools, unit testing, GitHub, and Docker Design and architect responsive, secure and scalable apps to deploy on AWS Adopt a minimalist, value-first approach to delivering your app with Kanban Get introduced to automated testing with continuous integration on CircleCI Optimize Nginx and Node.js web servers with load testing tools Who this book is for This book is for developers who want to confidently deliver high-quality and production-grade Angular apps from design to deployment. We assume that you have prior experience in writing a RESTful API with the tech stack of your choice; if you don't, you can still gain a lot of benefit from this book, which focuses on the entire scope of frontend development, from design to deployment!",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1786462907"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781786462909"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 512,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=1JHWtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=1JHWtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=1JHWtAEACAAJ&dq=angular&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=1JHWtAEACAAJ&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Angular_6_for_Enterprise_Ready_Web_Appli.html?hl=&id=1JHWtAEACAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=1JHWtAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "If you have been burnt by unreliable JavaScript frameworks before, you will be amazed by the maturity of the Angular platform."
      }
    },
    {
      "kind": "books#volume",
      "id": "NAbPAAAAMAAJ",
      "etag": "m38kfi00Msc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/NAbPAAAAMAAJ",
      "volumeInfo": {
        "title": "The Glacialists' Magazine",
        "subtitle": "A Monthly Magazine of Glacial Geology",
        "publishedDate": "1895",
        "description": "Embodying the proceedings of the Glacialists' Association.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UOM:39015069527706"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 624,
        "printType": "BOOK",
        "categories": [
          "Glacial epoch"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.12.17.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=NAbPAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=NAbPAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=NAbPAAAAMAAJ&pg=PA61&dq=angular&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=NAbPAAAAMAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=NAbPAAAAMAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=NAbPAAAAMAAJ&rdid=book-NAbPAAAAMAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/The_Glacialists_Magazine.epub?id=NAbPAAAAMAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/The_Glacialists_Magazine.pdf?id=NAbPAAAAMAAJ&hl=&output=pdf&sig=ACfU3U1yVWcytUYclnBGh-nchHVZDKTeCw&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=NAbPAAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e . Eskdale Granite 32 x 22 x 15 Sub - \u003cb\u003eangular\u003c/b\u003e . do . 23 x 19 x 16 + \u003cb\u003eAngular\u003c/b\u003e . Audesite L. D. 26 x 11 x ? Sub - \u003cb\u003eangular\u003c/b\u003e . In the village of Huntington . Eskdale Granite 26 x 30 x 14 Sub - \u003cb\u003eangular\u003c/b\u003e . Welsh Felsite 22 x 13 x 16&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "KCvdzVRb4I4C",
      "etag": "ADnLYqsl5JA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/KCvdzVRb4I4C",
      "volumeInfo": {
        "title": "College Physics",
        "authors": [
          "Raymond A. Serway",
          "Jerry S. Faughn"
        ],
        "publisher": "Pearson Educación",
        "publishedDate": "1999",
        "description": "\\"College Physics is written for a one-year course in introductory physics.\\"--Preface.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "9702600154"
          },
          {
            "type": "ISBN_13",
            "identifier": "9789702600152"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 942,
        "printType": "BOOK",
        "categories": [
          "Education"
        ],
        "averageRating": 4.5,
        "ratingsCount": 16,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.8.11.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=KCvdzVRb4I4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=KCvdzVRb4I4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=KCvdzVRb4I4C&pg=PA210&dq=angular&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=KCvdzVRb4I4C&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/College_Physics.html?hl=&id=KCvdzVRb4I4C"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/College_Physics-sample-pdf.acsm?id=KCvdzVRb4I4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=KCvdzVRb4I4C&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e cons- tante de 33 rev / min . ( a ) ¿ Cuál es su velocidad \u003cb\u003eangular\u003c/b\u003e en rad / s ? ( b ) ¿ Qué ángulo , en radianes , recorre en 1.5 s ? 4. Determine la velocidad \u003cb\u003eangular\u003c/b\u003e de la Tierra alrededor del Sol en radianes por segundo y en&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "nauWlPTBcjIC",
      "etag": "ohuJE3/D7RY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/nauWlPTBcjIC",
      "volumeInfo": {
        "title": "Academic Press Dictionary of Science and Technology",
        "authors": [
          "Christopher G. Morris",
          "Academic Press"
        ],
        "publisher": "Gulf Professional Publishing",
        "publishedDate": "1992-08-27",
        "description": "A Dictonary of Science and Technology. Color Illustration Section. Symbols and Units. Fundamental Physical Constants. Measurement Conversion. Periodic Table of the Elements. Atomic Weights. Particles. The Solar System. Geologial Timetable. Five-Kingdom Classification of Organisms. Chronology of Modern Science. Photo Credits.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0122004000"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780122004001"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 2488,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.7.7.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nauWlPTBcjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nauWlPTBcjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=nauWlPTBcjIC&pg=PA116&dq=angular&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=nauWlPTBcjIC&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Academic_Press_Dictionary_of_Science_and.html?hl=&id=nauWlPTBcjIC"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Academic_Press_Dictionary_of_Science_and-sample-pdf.acsm?id=nauWlPTBcjIC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=nauWlPTBcjIC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e Science . of or relating to an angle or angles ; having or forming angles or sharp corners . \u003cb\u003eangular\u003c/b\u003e acceleration Mechanics . the time rate of change in the angu- lar velocity of a rotating body , expressed in radians per&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "hc82AAAAMAAJ",
      "etag": "4JEJTaLbOAk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/hc82AAAAMAAJ",
      "volumeInfo": {
        "title": "An Elementary Treatise on Kinematics and Dynamics",
        "authors": [
          "James Gordon MacGregor"
        ],
        "publishedDate": "1887",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UOM:39015063897550"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 540,
        "printType": "BOOK",
        "categories": [
          "Dynamics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.12.14.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=hc82AAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=hc82AAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=hc82AAAAMAAJ&pg=PA144&dq=angular&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=hc82AAAAMAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=hc82AAAAMAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=hc82AAAAMAAJ&rdid=book-hc82AAAAMAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/An_Elementary_Treatise_on_Kinematics_and.epub?id=hc82AAAAMAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/An_Elementary_Treatise_on_Kinematics_and.pdf?id=hc82AAAAMAAJ&hl=&output=pdf&sig=ACfU3U0wnd5QlzVwj-g7J-NKKNc_eqwjDg&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=hc82AAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e velocity of a point ( 128 ) . 216. Composition of \u003cb\u003eAngular\u003c/b\u003e Velocities .-- If a rigid system with one point fixed have any number of com- ponent \u003cb\u003eangular\u003c/b\u003e velocities of given magnitudes and direc- tions , we may prove , by&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "9leiDwAAQBAJ",
      "etag": "vLX9ylFjJ9Q",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/9leiDwAAQBAJ",
      "volumeInfo": {
        "title": "Angular Form Essentials",
        "subtitle": "Learn the essentials to get started creating forms with Angular!",
        "authors": [
          "Cory Rylan"
        ],
        "publisher": "Cory Rylan",
        "publishedDate": "2019-07-14",
        "description": "Learn the essentials to get started creating complex forms with Angular! Learn to build custom input controls, handle validation and user accessibility. Authored by Google Developer Expert, Cory Rylan. Free lifetime updates of the book and code examples included! The goal of this book is to provide a practical introduction to the Angular Forms API and how they can help build complex forms in web applications. We will cover the various APIs used to create complex user forms. We will also look at how to handle validation logic, async data and custom form inputs. Learn how to use RxJS and Observables to build powerful reactive forms. An entire chapter is dedicated to creating accessible (a11y) forms in Angular as well.",
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 133,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "4.13.14.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=9leiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=9leiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=9leiDwAAQBAJ&printsec=frontcover&dq=angular&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=9leiDwAAQBAJ&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Form_Essentials.html?hl=&id=9leiDwAAQBAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Angular_Form_Essentials-sample-epub.acsm?id=9leiDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Angular_Form_Essentials-sample-pdf.acsm?id=9leiDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=9leiDwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Free lifetime updates of the book and code examples included! The goal of this book is to provide a practical introduction to the Angular Forms API and how they can help build complex forms in web applications."
      }
    },
    {
      "kind": "books#volume",
      "id": "CNJNAQAAMAAJ",
      "etag": "eB/vgPePChU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/CNJNAQAAMAAJ",
      "volumeInfo": {
        "title": "A Treatise on the Dynamics of a System of Rigid Bodies: The elementary part",
        "authors": [
          "Edward John Routh"
        ],
        "publishedDate": "1897",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "IOWA:31858020899146"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 450,
        "printType": "BOOK",
        "categories": [
          "Dynamics, Rigid"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.5.7.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=CNJNAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=CNJNAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=CNJNAQAAMAAJ&pg=PA192&dq=angular&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=CNJNAQAAMAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=CNJNAQAAMAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=CNJNAQAAMAAJ&rdid=book-CNJNAQAAMAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/A_Treatise_on_the_Dynamics_of_a_System_o.epub?id=CNJNAQAAMAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=CNJNAQAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003eangular\u003c/b\u003e velocity in direction and magnitude . 233. This proposition shows that \u003cb\u003eangular\u003c/b\u003e velocities and \u003cb\u003eangular\u003c/b\u003e accelerations may be compounded and resolved by the same rules and in the same way as if they were forces . Thus an \u003cb\u003eangular\u003c/b\u003e&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "TlIXMQAACAAJ",
      "etag": "U/O3fFw99fk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/TlIXMQAACAAJ",
      "volumeInfo": {
        "title": "Angular Js in Your Pocket",
        "authors": [
          "Etta Roberts"
        ],
        "publisher": "Createspace Independent Publishing Platform",
        "publishedDate": "2016-11-27",
        "description": "AngularJS (commonly referred to as \\"Angular\\" or \\"Angular.js\\") is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. The AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. This updated and expanded second edition of Book provides a user-friendly introduction to the subject, Taking a clear structural framework, it guides the reader through the subject's core elements. A flowing writing style combines with the use of illustrations and diagrams throughout the text to ensure the reader understands even the most complex of concepts. This succinct and enlightening overview is a required reading for all those interested in the subject . We hope you find this book useful in shaping your future career & Business.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1540654001"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781540654007"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 108,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=TlIXMQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=TlIXMQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=TlIXMQAACAAJ&dq=angular&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=TlIXMQAACAAJ&dq=angular&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Angular_Js_in_Your_Pocket.html?hl=&id=TlIXMQAACAAJ"
      },
      "saleInfo": {
        "country": "MU",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "MU",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=TlIXMQAACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This succinct and enlightening overview is a required reading for all those interested in the subject . We hope you find this book useful in shaping your future career &amp; Business."
      }
    }
  ]
}
`) as { items: Book[] },
    ).pipe(map((books) => books.items || []));

    return this.http
      .get<{
        items: Book[];
      }>('https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=angular')
      .pipe(map((books) => books.items || []));
  }
}
