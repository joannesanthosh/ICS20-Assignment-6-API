/* Created by: Joanne Santhosh
 * Created on: May 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-6-API/sw.js", {
    scope: "/ICS20-Assignment-6-API/",
  })
}

/**
 * Get API info.
 */
const getImage = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress)
    document.getElementById("api-image").innerHTML =
      '<img src="https://random.imagecdn.app/500/500" alt="Random image" class="center" width="40%" ' +
      ">"
  } catch (err) {
    console.log(err)
  }
}
getImage("https://random.imagecdn.app/500/500")
