const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const { URL } = require('url');

async function analyzeWebsite(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const { lhr } = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'info',
    onlyCategories: ['performance'],
  });

  await browser.close();

  return {
    url,
    performanceScore: lhr.categories.performance.score * 100,
    loadTime: lhr.audits['interactive'].numericValue / 1000,
    firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue / 1000,
    timeToInteractive: lhr.audits['interactive'].numericValue / 1000,
    largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue / 1000,
    totalPageSize: lhr.audits['total-byte-weight'].numericValue / 1024,
    // totalRequests: lhr.audits['network-requests'].numericValue,
    totalRequests: lhr.audits['network-requests'].details.items.length,
    timeToFirstByte: lhr.audits['server-response-time'].numericValue,
    cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue,
    firstInputDelay: lhr.audits['max-potential-fid'].numericValue,
  };
}

module.exports = analyzeWebsite;
