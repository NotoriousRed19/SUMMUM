const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            background-color: #050505; 
            color: #ffffff; 
            padding: 60px; 
            margin: 0;
            -webkit-print-color-adjust: exact;
          }
          .header { 
            text-align: center; 
            margin-bottom: 60px; 
            border-bottom: 1px solid rgba(158,127,65,0.3); 
            padding-bottom: 30px; 
          }
          .header h1 { 
            font-family: 'Playfair Display', serif;
            color: #9e7f41; 
            letter-spacing: 8px; 
            text-transform: uppercase; 
            font-weight: 400; 
            font-size: 36px;
            margin: 0 0 10px 0;
          }
          .header p {
            color: #888; 
            letter-spacing: 3px; 
            text-transform: uppercase; 
            font-size: 10px;
            margin: 0;
          }
          .title-section {
            margin-bottom: 40px;
          }
          .title { 
            font-size: 20px; 
            font-weight: 300; 
            color: #fff;
            letter-spacing: 1px; 
          }
          .date {
            font-size: 12px;
            color: #888;
            margin-top: 5px;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 60px; 
          }
          th { 
            text-align: left; 
            padding: 15px 0; 
            border-bottom: 1px solid #9e7f41; 
            color: #9e7f41; 
            text-transform: uppercase; 
            font-size: 11px; 
            letter-spacing: 2px; 
            font-weight: 600;
          }
          td { 
            padding: 25px 0; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            font-weight: 300; 
          }
          .amount { 
            text-align: right; 
            font-family: monospace;
            font-size: 16px;
          }
          .item-title {
            font-size: 16px; 
            margin-bottom: 8px;
            color: #fff;
            font-weight: 400;
          }
          .item-desc {
            font-size: 14px; 
            color: #aaaaaa;
            line-height: 1.6;
            max-width: 90%;
          }
          .total-row td { 
            padding-top: 30px;
            border-bottom: none; 
          }
          .total-label {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            color: #9e7f41;
          }
          .total-amount {
            font-weight: 600; 
            font-size: 24px; 
            color: #9e7f41;
            font-family: monospace;
          }
          .footer { 
            margin-top: 80px; 
            font-size: 12.5px; 
            color: #888888; 
            line-height: 1.8;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 30px;
          }
          .footer strong {
            color: #aaaaaa;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>SUMMUM</h1>
          <p>Propuesta de Desarrollo Web & Infraestructura</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;">
          <div>
            <div class="title" style="margin-bottom: 10px;">Cotización de Proyecto</div>
            <div class="date">Fecha: ${new Date().toLocaleDateString('es-ES')}</div>
          </div>
          <div style="text-align: right; color: #888; font-size: 12px; line-height: 1.6;">
            <strong style="color: #9e7f41; font-size: 16px; font-family: 'Playfair Display', serif; display: block; margin-bottom: 5px;">SantanaDev</strong>
            <div>Desarrollo de Software Premium</div>
            <div>LopezMauricioDev@gmail.com</div>
            <div>+58 424-6270071</div>
          </div>
        </div>

        <div style="background: rgba(158,127,65,0.05); border: 1px solid rgba(158,127,65,0.2); border-radius: 6px; padding: 16px 20px; margin-bottom: 30px;">
          <div style="font-size: 11px; color: #9e7f41; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Tipo de Proyecto</div>
          <div style="font-size: 15px; color: #ffffff; font-weight: 400; margin-bottom: 4px;">Sitio Web Corporativo — Landing Page Premium</div>
          <div style="font-size: 12px; color: #aaaaaa; line-height: 1.5;">Página web de una sola pantalla (One Page) para marca gastronómica de alto posicionamiento. Construida con <strong style="color: #ccc;">Next.js 16</strong>, animaciones avanzadas con <strong style="color: #ccc;">Framer Motion</strong> y base de datos en la nube con <strong style="color: #ccc;">Supabase</strong>. Diseño exclusivo, 100% a medida y responsivo.</div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Concepto y Descripción Detallada</th>
              <th class="amount">Inversión (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="item-title">Desarrollo Frontend Premium (UI/UX)</div>
                <div class="item-desc">Diseño web a medida centrado en la experiencia del usuario (UI/UX). Incluye desarrollo de interfaz interactiva con animaciones avanzadas (Framer Motion), navegación fluida de alta gama (Smooth Scrolling) y arquitectura 100% responsiva adaptada perfectamente a móviles, tablets y escritorio.</div>
              </td>
              <td class="amount">$ 250.00</td>
            </tr>
            <tr>
              <td>
                <div class="item-title">Backend, Panel Administrativo & Correos Automáticos</div>
                <div class="item-desc">Arquitectura de datos escalable con <strong>Supabase</strong>. Desarrollo de un <strong>Panel Administrativo Privado</strong> para filtrar y gestionar la base de clientes. Incluye motor de generación de códigos de acceso exclusivos y sistema avanzado de mensajería automatizada (<strong>Nodemailer + Google SMTP</strong>) para el envío automático de códigos por email y correos personalizados directamente desde el panel.</div>
              </td>
              <td class="amount">$ 140.00</td>
            </tr>
            <tr>
              <td>
                <div class="item-title">Setup de Infraestructura & Despliegue</div>
                <div class="item-desc">Configuración inicial de servidores en la nube, despliegue del código fuente en entorno de producción global, integración continua (CI/CD), instalación de certificados de seguridad SSL y configuración de registros DNS para la vinculación del dominio oficial.</div>
              </td>
              <td class="amount">$ 100.00</td>
            </tr>
            <tr>
              <td>
                <div class="item-title">Hosting y Dominio (Anual)</div>
                <div class="item-desc">Pago de licencias a proveedores de terceros. Incluye el alojamiento web de alta velocidad en la nube y el registro del nombre de dominio oficial por el primer año completo de operaciones de la marca.</div>
              </td>
              <td class="amount">$ 60.00</td>
            </tr>
            <tr class="total-row">
              <td class="total-label">INVERSIÓN TOTAL</td>
              <td class="amount total-amount">$ 550.00</td>
            </tr>
          </tbody>
        </table>
        
        <div class="footer">
          <p><strong>Condiciones de Pago:</strong> 50% de anticipo para iniciar el proyecto, 50% restante contra entrega y aprobación final del cliente.</p>
          <p><strong>Notas de Servicio:</strong></p>
          <ul style="margin-top: 5px; padding-left: 15px; color: #666; line-height: 1.6;">
            <li style="margin-bottom: 5px;">Esta cotización ya incluye los gastos de infraestructura, dominio y hosting por el primer año. A partir del segundo año, la renovación de estos servicios correrá a cargo del cliente para mantener la web en línea.</li>
            <li style="margin-bottom: 5px;">En caso de que el cliente decida delegar en SantanaDev la responsabilidad de gestionar y pagar la renovación de hosting y dominio a partir del segundo año, esto conllevará un costo adicional por concepto de gestión técnica anual.</li>
            <li>Cualquier requerimiento de actualización de contenido, modificaciones de diseño o desarrollo de nuevas funcionalidades posterior a la entrega final, será cotizado de forma independiente como un costo adicional (tarifa por hora o por requerimiento).</li>
          </ul>
        </div>
        
        <div style="page-break-before: always;"></div>
        
        <div class="title-section" style="margin-top: 20px;">
          <div class="title" style="color: #9e7f41; font-family: 'Playfair Display', serif; font-size: 24px;">Desglose Estructural del Proyecto</div>
          <div class="item-desc" style="margin-top: 10px; font-size: 14px; max-width: 100%;">El desarrollo Frontend Premium comprende la creación, diseño e integración de las siguientes secciones principales para la página web:</div>
        </div>
        
        <div style="margin-top: 20px;">
          <ul style="color: #aaaaaa; font-size: 14px; line-height: 1.6; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Hero Section:</strong> Portada de alto impacto visual con diseño inmersivo y llamado a la acción principal.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Identidad (Quiénes Somos):</strong> Sección corporativa dinámica con ventanas modales elegantes para lectura de la Visión y Objetivos.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Despensa (Productos):</strong> Carrusel interactivo automatizado de alta fluidez exhibiendo el catálogo fotográfico de productos.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Experiencias (Servicios):</strong> Presentación de la vertical de eventos y catering con efectos interactivos y cinemáticos de vanguardia.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Galería Visual:</strong> Exhibición fotográfica inmersiva de eventos, instalaciones y platillos de alta gastronomía.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Sistema de Registro:</strong> Formulario modal inteligente e interactivo enfocado en la captación de leads y potenciales clientes.</li>
            <li style="margin-bottom: 10px;"><strong style="color: #fff;">Panel Administrativo Privado:</strong> Dashboard interno conectado a base de datos para visualizar y filtrar clientes registrados, con integración de mensajería (Nodemailer) para enviar códigos y correos personalizados.</li>
            <li><strong style="color: #fff;">Footer Profesional:</strong> Cierre institucional y canal de contacto directo exclusivo vía Instagram.</li>
          </ul>
        </div>
      </body>
    </html>
  `;
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  const outputPath = 'C:/Users/SushiTrash/Desktop/Cotizacion_Summum.pdf';
  await page.pdf({ 
    path: outputPath, 
    format: 'A4', 
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });
  
  await browser.close();
  console.log('PDF generado exitosamente en:', outputPath);
})();
