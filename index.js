const fs = require('fs')

// This is used to store the data read from testJsonFile.json.
// We will assign the parsed json data to this const 
// and the code that writes to a file will use the data
// stored in this const
let parsedJsonData 

// Two ways to read a file

/*
Uncomment the below code to run the asynchronous read function
*/

// fs.readFile('./testJsonFile.json', 'utf8', (error, data) => {
// 	if (error) {
// 		console.log(`ERROR: ${error}`)
// 		return
// 	}

// 	const jsonData = JSON.parse(data)
// 	parsedJsonData = jsonData
	
// 	// Check the keys that jsonData has
// 	console.log(Object.keys(jsonData))

// 	jsonData.frameworks.forEach(framework => {
// 		console.log(`Framework: ${framework}`)
// 	})
// })

try {
	const data = fs.readFileSync('./testJsonFile.json', 'utf8')
	const jsonData = JSON.parse(data)
	parsedJsonData = jsonData

	// Check the keys that jsonData has
	console.log(Object.keys(jsonData))
	
	jsonData.frameworks.forEach(framework => {
		console.log(`Framework: ${framework}`)
	})
} catch (error) {
	console.log(`ERROR: ${error}`)
}


// Two ways to write json to a file
parsedJsonData.frameworks.push('nest js')

/*
Uncomment the below code to run the asynchronous write function
*/

// const asyncFrameworksData = JSON.stringify(parsedJsonData) 
// fs.writeFile('./testJsonFile.json', asyncFrameworksData, 'utf-8', (error) => {
// 	if (error) {
// 		console.log(`WRITE ERROR: ${error}`)
// 	} else {
// 		console.log('FILE WRITTEN TO')
// 	}
// })

try {
	const frameworksData = JSON.stringify(parsedJsonData)
	fs.writeFileSync('./testJsonFile.json', frameworksData, 'utf-8')
} catch (error) {
	console.log(`WRITE ERROR: ${error}`)
}
