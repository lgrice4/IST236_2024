// Imports model for news info
import News from "../models/News";

// News model tracks ID, news type (USA, World, Travel, etc), headline, date, author, agency, description, imageUrl
export const NEWSARTICLES = [
  // USA ARTICLES BEGIN HERE ----- !!!

  new News(
    "n1",
    "USA",
    "How a surprising detail in bank records helped a historian bust a longstanding myth about Irish immigrants",
    "March 17, 2024",
    "Catherine E. Shoichet",
    "CNN",
    "Tyler Anbinder didn’t know what he’d find when he started digging into a vast trove of records that had been locked inside a bank — and inaccessible to the public — for nearly 150 years. \n \n" +
      "One detail immediately caught the historian’s attention: The accounts described in the bank’s ledgers had much more money in them than he expected. \n \n" +
      "As he first combed through files from the Emigrant Savings Bank at the New York Public Library that day about 25 years ago, Anbinder was working on a book about the city’s famed Five Points neighborhood. \n \n" +
      "That 19th-century enclave, portrayed as a battleground for warring criminals in the 2002 Martin Scorsese film “Gangs of New York,” was “notoriously overcrowded, run-down (and) impoverished,” Anbinder notes. It was also “home to more Irish immigrants than any other part of New York. \n \n" +
      "Still, the bank records Anbinder found revealed that even day laborers, who many would assume lived hand to mouth, had savings in their accounts that would amount to around $6,000 in today’s dollars.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-515455106.jpg?q=w_2000,c_fill/f_webp"
  ),

  new News(
    "n2",
    "USA",
    "It’s not you, it’s them: Engaged couples are cutting back on lavish weddings",
    "March 18, 2024",
    "Samantha Delouya",
    "CNN",
    "Multi-tiered cakes, elaborate floral displays and choreographed first dances: The traditional white wedding has been long considered a hallmark of American life. \n \n" +
      "The obsession with lavish weddings grew to a fever pitch in the years following the start of the Covid-19 pandemic. At the same time, inflation soared — and the average cost of a wedding broke $30,000 for the first time in 2023, according to The Wedding Report, a research company that tracks wedding data.  \n \n" +
      "Now, after two years of elevated inflation eating into consumers’ wealth, for some engaged couples, splurging on a dessert table or extra sprays of flowers, which are the definition of “nice to haves,” has become a much less justifiable decision. That’s bad news for wedding vendors who provide services like videography, photo booths and catering. \n \n" +
      "Meanwhile, those vendors are facing a more worrisome existential threat: a looming drop in the overall number of weddings.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-641209186.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  new News(
    "n3",
    "USA",
    "Vessel ‘accidentally discharged’ 500 gallons of diesel fuel off Northern California coast, Coast Guard says",
    "March 16, 2024",
    "Taylor Romine",
    "CNN",
    "A US Coast Guard vessel “accidentally discharged” about 500 gallons of diesel fuel off the coast of Northern California, District 11 of the military branch said in a news release. \n \n" +
      "The Coast Guard Cutter Alder, a 225-foot buoy tender, was on its way to Humboldt Bay Friday morning while the vessel was about 30 miles offshore from the town of Fort Bragg, the release said. \n \n" +
      "Coast Guard officials said they are investigating and “evaluating potential impacts to sensitive sites” but do not expect the shoreline to be affected. \n \n" +
      "“Our priority is to protect the environment and prevent any future incidents,” said Coast Guard Rear Adm. Andrew Sugimoto, commander of District 11. US Coast Guard and local authorities are investigating an oil sheen in the waters off Huntington Beach in Southern California.",
    "https://media.cnn.com/api/v1/images/stellar/prod/coast-guard-cutter-alder.jpeg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  new News(
    "n4",
    "USA",
    "Authorities seize 750-pound alligator named Albert from New York home",
    "March 17, 2024",
    "Zoe Sottile",
    "CNN",
    "An upstate New York man was forced to say “see you later, alligator” to his unusual pet after local authorities determined he was keeping the reptile illegally. \n \n" +
      "Environmental Conservation police officers seized the 11-foot, 750-pound pet alligator from a Hamburg home on Wednesday, according to a Facebook post from the New York State Department of Environmental Conservation. \n \n" +
      "Officers said “the owner of the home had built an addition to his house and installed an in-ground swimming pool for his roughly 30-year-old alligator, and allegedly allowed members of the public to get into the water to pet the unsecured alligator,” the Facebook post said \n \n" +
      "The behemoth is named Albert, according to a report from CNN affiliate WKBW.",
    "https://static01.nyt.com/images/2024/03/18/multimedia/18-BUFFALO-ALLIGATOR-PRINT/16buffalo-alligator-02-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
  ),

  // WORLD ARTICLES BEGIN HERE ----- !!!

  new News(
    "n5",
    "WORLD",
    "Could you be the next James Bond? UK spy agency releases puzzle for potential new recruits",
    "March 14, 2024",
    "Jack Guy",
    "CNN",
    "Do you have a burning desire to be the next real-life James Bond? \n \n" +
      "GCHQ, the UK’s largest intelligence agency, is looking for new recruits and has released a new visual puzzle to test the skills of anyone interested in a role. \n \n" +
      "Aimed at “those who think and see the world differently,” the puzzle has been released as part of a recruitment drive as the agency launches a new page on professional networking site LinkedIn. \n \n" +
      "The puzzle, created in collaboration with artist Justin Eagleton, “is aimed at those who think and see the world differently and who can bring a new perspective to problem-solving,” the agency said in a statement Wednesday. \n \n" +
      "“Puzzles are at the heart of our vital work,” reads the statement. “These skills represent our historic roots in cryptography and encryption and continue to be important to our modern-day mission to keep the country safe. \n \n" +
      "There are 13 clues of letters that spell out a message, the agency added.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-71414154.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  new News(
    "n6",
    "WORLD",
    "Why axolotls seem to be everywhere — except in the one lake they call home",
    "March 16, 2023",
    "Kate Golembiewski",
    "CNN",
    "Scientist Dr. Randal Voss gets the occasional reminder that he’s working with a kind of superstar. When he does outreach events with his laboratory, he encounters people who are keen to meet his research subjects: aquatic salamanders called axolotls \n \n" +
      "The amphibians’ fans tell Voss that they know the animals from the internet, or from caricatures or stuffed animals, exclaiming, “‘They’re so adorable, we love them,’” said Voss, a professor of neuroscience at the University of Kentucky College of Medicine. “People are drawn to them. \n \n" +
      "Take one look at an axolotl, and it’s easy to see why it’s so popular. With their wide eyes, upturned mouths and pastel pink coloring, axolotls look cheerful and vaguely Muppet-like. \n \n" +
      "They’ve skyrocketed in pop culture fame, in part thanks to the addition of axolotls to the video game Minecraft in 2021. These unusual salamanders are now found everywhere from Girl Scout patches to hot water bottles. But there’s more to axolotls than meets the eye: Their story is one of scientific discovery, exploitation of the natural world, and the work to rebuild humans’ connection with nature.",
    "https://media.cnn.com/api/v1/images/stellar/prod/b8c6tt.jpg?q=w_2000,c_fill/f_webp"
  ),

  new News(
    "n7",
    "WORLD",
    "Fire devastates historic studio in ‘Hollywood on the Nile’",
    "March 16, 2023",
    "Kareem El Damanhoury, \n Eyad Kourdi and Heather Chen",
    "CNN",
    "A major fire ravaged the 80-year-old iconic Al-Ahram Studio in Cairo, causing extensive damage and spreading to adjacent buildings on Saturday morning, according to the Egyptian state news website Al-Ahram. \n \n" +
      "The fire, which took firefighters over five hours to extinguish and prompted an evacuation of nearby residential buildings, erupted just hours after the completion of filming for a Ramadan television series, Al-Ahram added. \n \n" +
      "“The studio was destroyed, including decorations, wood, places designated for photography, and corridors,” the report said. \n \n" +
      "Videos circulating on Egyptian media sites showed the studio site and the buildings around it fully affected by the fire. \n \n" +
      "No fatalities have been reported and several injured were transported to hospitals for treatment, according to state media.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2082103343.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  new News(
    "n8",
    "WORLD",
    "Asian elephants bury their dead, study suggests",
    "March 14, 2024",
    "Jack Guy",
    "CNN",
    "Researchers in India have for the first time documented how Asian elephants bury dead calves. \n \n" +
      "Five calves were found buried on their backs in drainage ditches in tea gardens in northern Bengal, according to a new study. \n \n" +
      "While African elephants are known to bury dead calves, this is the first time that the behavior has been documented in Asian elephants, study author Akashdeep Roy, a researcher at the Indian Institute of Science Education and Research (IISER), told CNN on Wednesday. \n \n" +
      "The burials were documented in areas home to fragmented forests and agricultural lands such as tea gardens, said Roy.",
    "https://media.cnn.com/api/v1/images/stellar/prod/01-asian-elephants-burials.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  // TRAVEL ARTICLES BEGIN HERE ----- !!!

  new News(
    "n9",
    "TRAVEL",
    "This train goes nowhere. Now it’s a luxury attraction.",
    "January 19, 2024",
    "Tom Page and Michael Cross",
    "CNN",
    "South Africa is home to some of the most luxurious, nostalgic train journeys on offer anywhere in the world. But for certain enthusiasts, a train going nowhere is the country’s star attraction. \n \n" +
      "Kruger Shalati: The Train on the Bridge is a hotel in Skukuza in Kruger National Park, one of Africa’s largest game reserves and part of a UNESCO World Heritage Site. Comprising a set of train carriages renovated into 24 modern suites with balconies and a pool overlooking the Sabie River, it marries luxury accommodation with an intimate view of wildlife, including sightings of Africa’s “Big Five” — lions, leopards, rhinos, elephants and buffalos. \n \n " +
      "Jerry Mabena, CEO of Motsamayi Tourism Group, which owns the hotel, says the venture harks back to the earliest days of the park, when steam trains would pass through Kruger in the 1920s on the Selati Railway Line.",
    "https://media.cnn.com/api/v1/images/stellar/prod/240115163317-kruger-shalati-2.jpg?c=original&q=h_618,c_fill"
  ),

  new News(
    "n10",
    "TRAVEL",
    "France’s favorite cheese is facing an ‘extinction’ crisis. Not everyone is worried.",
    "March 6, 2024",
    "Xiaofei Xu",
    "CNN",
    "When Napoleon first encountered a Camembert cheese, legend has it, he was so delighted he kissed the waitress who plonked it in front of him. Setting aside the inappropriateness of this gesture, the French emperor clearly recognized a winner. \n \n" +
      "Produced in France’s northwestern region of Normandy in various forms since at least the 18th century, the cheese - creamy, pungent and gooey - is now regarded as France’s favorite. \n \n" +
      "Which is why recent headlines about Camembert’s imminent death due to a fungal crisis have caused panic among fans of this historic fromage. Scientists, it seems, have warned that problems with French cheese’s industrial production may have long-term consequences for its future. \n \n" +
      "Alarm was raised in January when a recent study by scientists at Paris-Saclay University identified that the main fungus used in creating Camembert and other cheeses was increasingly in short supply due to the industrial production methods used to keep up with demand. \n \n" +
      "And while that might spell trouble for a variety of dairy offerings, some have taken this to mean that poor Camembert – which is handily sold in its own wooden box – is headed for the grave.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-925809414.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  new News(
    "n11",
    "TRAVEL",
    "Why this is Las Vegas’ hottest neighborhood.",
    "March 17, 2024",
    "Matt Villano",
    "CNN",
    "Visitors love Las Vegas for the glitz, glam and garishness of the resorts that line the 4.2-mile Las Vegas Strip, but the most exciting neighborhood in the city right now is all about art. \n \n" +
      "This area, fittingly called the Arts District, has become a haven for local creatives. \n \n" +
      "It’s a hotbed of culinary excellence, visual spectacle, digital design and immersive theater. It’s home to one of the city’s most popular restaurants, several cult-favorite bars and breweries, one-of-a-kind shopping and a boutique hotel. It’s even got the city’s only indoor half-pipe. \n \n" +
      "In a town synonymous with flashing neon, blaring slots and other electronic marvels, the Arts District continues to captivate with seemingly boundless achievements of the human mind. \n \n" +
      "It also happens to be largely a mystery to those from out of town.",
    "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-13888936it.jpg?c=original&q=h_618,c_fill"
  ),

  new News(
    "n12",
    "TRAVEL",
    "‘World’s coolest’ street for 2024 named by Time Out.",
    "March 13, 2024",
    "Francesca Street",
    "CNN",
    "What makes a street “cool?” Is it a plethora of restaurants, bars, cafes you can spend hours dipping in and out of? Is it independent stores, selling wares you won’t find anywhere else? Or is it just a general vibe, a friendly warmth that’s hard to pin down, but which you know when you feel it? \n \n" +
      "Time Out reckons it’s all of the above – the global media company’s put together its list of the “coolest streets in the world right now”, factoring in each street’s food offerings, drink options, cultural delights, nightlife and overall sense of community. \n \n" +
      "To produce the 2024 lineup, the global listings guide’s network of editors and writers chipped in to make the case for their favorite streets in their respective cities.",
    "https://media.cnn.com/api/v1/images/stellar/prod/210610034246-06-time-out-coolest-streets-2021-photos.jpg?q=w_1600,h_1067,x_0,y_0,c_fill/h_618"
  ),
];
