const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function renderMermaidDiagram() {
  const mmdContent = fs.readFileSync('docs/architecture/architecture.mmd', 'utf8');
  const archDir = path.resolve('docs/architecture');

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      margin: 0;
      padding: 40px;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      color: #222222;
      font-size: 26px;
      margin-bottom: 8px;
    }
    p {
      color: #717171;
      font-size: 14px;
      margin-bottom: 24px;
    }
    .mermaid {
      background: #ffffff;
      padding: 24px;
      border: 1px solid #DDDDDD;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      max-width: 1400px;
    }
  </style>
</head>
<body>
  <h1>Production-Scale Vacation Rental Marketplace Architecture (Airbnb Scale)</h1>
  <p>High-Availability System Design: Multi-Region Ingress, Edge CDN, Domain Microservices, Kafka Event Streaming, Aurora Postgres, Redis Redlock, OpenSearch & CDC</p>
  <div class="mermaid">
${mmdContent}
  </div>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis'
      }
    });
  </script>
</body>
</html>`;

  const renderHtmlPath = path.join(archDir, 'render.html');
  fs.writeFileSync(renderHtmlPath, html);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1600 } });

  await page.goto('file://' + renderHtmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Take PNG screenshot
  await page.screenshot({
    path: path.join(archDir, 'architecture_diagram.png'),
    fullPage: true,
  });

  // Export PDF
  await page.pdf({
    path: path.join(archDir, 'architecture_diagram.pdf'),
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  console.log('Architecture diagram rendered successfully as PNG and PDF.');
  await browser.close();
}

renderMermaidDiagram().catch(console.error);
