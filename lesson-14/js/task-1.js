'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
 * ----- Властивості ------
 *   - назва компанії на час розробки (назву періодично змінюють)
 *   - власник компанії
 *   - споснсори (масив спонсорів)
 *     = прізвище спонсора
 *     = ім’я спонсора
 *     = сума вкладень спонсора
 *   - рік випуску сайту
 *   - вартість сайту
 */

  const siteList = [
    {
      title: 'Company One',
      owner: 'John Doe',
      sponsors: [
        { lastName: 'Smith', firstName: 'John', amount: 100 },
        { lastName: 'Johnson', firstName: 'Bob', amount: 100 },
        { lastName: 'Jackson', firstName: 'Mike', amount: 500 },
      ],
      yearOfRelease: 1999,
      siteCost: 1000,
    },
    {
      title: 'Company Two',
      owner: 'Jane Doe',
      sponsors: [
        { lastName: 'Smith', firstName: 'John', amount: 1000 },
        { lastName: 'Johnson', firstName: 'Bob', amount: 2000 },
        { lastName: 'Jackson', firstName: 'Mike', amount: 5000 },
      ],
      yearOfRelease: 2005,
      siteCost: 200000,
    },
    {
      title: 'Company Three',
      owner: 'Jim Doe',
      sponsors: [
        { lastName: 'Smith', firstName: 'John', amount: 1000 },
        { lastName: 'Johnson', firstName: 'Bob', amount: 2000 },
        { lastName: 'Jackson', firstName: 'Mike', amount: 5000 },
      ],
      yearOfRelease: 2010,
      siteCost: 300000,
    },
    {
      title: 'Company Four',
      owner: 'Jake Doe',
      sponsors: [
        { lastName: 'Smith', firstName: 'John', amount: 1000 },
        { lastName: 'Johnson', firstName: 'Bob', amount: 2000 },
        { lastName: 'Jackson', firstName: 'Mike', amount: 5000 },
      ],
      yearOfRelease: 2015,
      siteCost: 400000,
    },
    {
      title: 'Company Five',
      owner: 'Jill Doe',
      sponsors: [
        { lastName: 'Smith', firstName: 'John', amount: 1000 },
        { lastName: 'Johnson', firstName: 'Bob', amount: 200000 },
        { lastName: 'Jackson', firstName: 'Mike', amount: 5000 },
      ],
      yearOfRelease: 2020,
      siteCost: 500000,
    },
  ]

  // ==================================================================================================
  // 1) загальну вартість усіх сайтів =================================================================
  // ==================================================================================================

  const totalCost = (siteList) => siteList.reduce((acc, site) => acc + site.siteCost, 0)

  console.log(`Сумарна вартість сайтів: ${totalCost(siteList)}`)

  // ==================================================================================================
  // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр. =======================================
  // ==================================================================================================

  const countSitesBetween2000And2009 = (siteList) => {
    return siteList.reduce((prevCount, site) => site.yearOfRelease >= 2000 && site.yearOfRelease <= 2009 ? prevCount + 1 : prevCount, 0)
  }

  console.log(`Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${countSitesBetween2000And2009(siteList)}`)

  // ==================================================================================================
  // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000 ========================
  // ==================================================================================================

  function countSitesWithSponsorAmountGreaterThan100000(siteList) {
    let count = 0
    for (const site of siteList) {
      const totalSponsorAmount = site.sponsors.reduce((acc, sponsor) => acc + sponsor.amount, 0)
      if (totalSponsorAmount > 100000) {
        count++
      }
    }
    return count
  }

  console.log(`Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${countSitesWithSponsorAmountGreaterThan100000(siteList)}`)

  // ==================================================================================================
  // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
  // ==================================================================================================

  function getAllSponsors(siteList) {
    const sponsors = []
    for (const site of siteList) {
      for (const sponsor of site.sponsors) {
        sponsors.push(`${sponsor.firstName} ${sponsor.lastName}`)
      }
    }
    return sponsors
  }

  console.log(getAllSponsors(siteList));

  // ==================================================================================================
  // 5) знайти рік, коли прибуток був найбільшим ======================================================
  // ==================================================================================================

  function getYearWithHighestProfit(siteList) {
    let maxProfit = -Infinity
    let yearWithMaxProfit = null

    for (const site of siteList) {
      const totalSponsorAmount = site.sponsors.reduce((acc, sponsor) => acc + sponsor.amount, 0)
      const profit = site.siteCost - totalSponsorAmount

      if (profit > maxProfit) {
        maxProfit = profit
        yearWithMaxProfit = site.yearOfRelease
      }
    }

    return yearWithMaxProfit

  }

  console.log(`Рік, коли прибуток був найбільшим: ${getYearWithHighestProfit(siteList)}`)

  // ==================================================================================================
  // 6) упорядкувати список за спаданням прибутку =====================================================
  // ==================================================================================================
  function sortSitesByProfit(siteList) {
    return siteList.sort((a, b) => {
      const profitA = a.siteCost - a.sponsors.reduce((acc, sponsor) => acc + sponsor.amount, 0)
      const profitB = b.siteCost - b.sponsors.reduce((acc, sponsor) => acc + sponsor.amount, 0)
      return profitB - profitA
    })
  }

  console.log(sortSitesByProfit(siteList))

  // ====================================================================================================
  // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
  // ====================================================================================================
  function splitSitesByCost(siteList) {
    const sitesUnder10000 = []
    const sitesOver10000 = []

    for (const site of siteList) {
      if (site.siteCost < 10000) {
        sitesUnder10000.push({ ...site })
      } else {
        sitesOver10000.push({ ...site })
      }
    }

    return { sitesUnder10000, sitesOver10000 }
  }

  const { sitesUnder10000, sitesOver10000 } = splitSitesByCost(siteList)
  console.log('Сайти з вартістю менше 10000:', sitesUnder10000)
  console.log('Сайти з вартістю більше 10000:', sitesOver10000)

}

