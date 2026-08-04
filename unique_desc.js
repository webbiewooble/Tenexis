const fs = require('fs');
const cheerio = require('cheerio');

const descriptions = {
    'Activmotion S – Medial Opening Wedge HTO Plate (Size 1)': 'Designed for precise medial opening wedge high tibial osteotomies, this Size 1 plate offers optimal stabilization for correcting early to moderate unicompartmental osteoarthritis and mild coronal deformities.',
    'Activmotion S – Medial Opening Wedge HTO Plate (Size 2)': 'Engineered for larger anatomical profiles, the Size 2 medial opening wedge plate provides enhanced structural support for treating advanced unicompartmental osteoarthritis and significant sagittal or coronal misalignments.',
    'Activmotion S – HTO Plate with ACL Reconstruction': 'A specialized dual-purpose plate indicated for simultaneous uni-planar or bi-planar osteotomies and ligamentoplasty, streamlining high tibial realignment with ACL reconstruction procedures.',
    'Activmotion S – HTO Plate with ACL Reconstruction & Suture Button': 'Advanced fixation solution combining HTO stabilization with integrated suture button compatibility, facilitating complex bi-planar osteotomies alongside secure ACL ligamentoplasty.',
    'Lateral Closing Wedge HTO Plate (Size 1)': 'Compact and anatomically contoured Size 1 plate designed specifically for lateral closing wedge osteotomies, enabling accurate correction of unicompartmental osteoarthritis while preserving soft tissue.',
    'Lateral Closing Wedge HTO Plate (Size 2)': 'Robust Size 2 lateral closing wedge plate tailored for greater load-bearing requirements, providing rigid fixation to address complex unicompartmental osteoarthritis and substantial knee deformities.',
    'Medial Closing Wedge HTO Plate (Size 1)': 'Optimized for medial closing procedures, this Size 1 plate delivers reliable stability and anatomical fit for the precise treatment of unicompartmental osteoarthritis and minor knee misalignments.',
    'Medial Closing Wedge HTO Plate (Size 2)': 'Designed for broader anatomical coverage, the Size 2 medial closing wedge plate ensures secure stabilization during the correction of severe knee coronal or sagittal deformities and osteoarthritis.',
    'Lateral Opening Distal Femoral Osteotomy (DFO) Plate': 'Engineered for lateral opening wedge distal femoral osteotomies, this plate facilitates precise correction of valgus deformities and unicompartmental osteoarthritis at the distal femur.',
    'Medial Closing Distal Femoral Osteotomy (DFO) Plate': 'Anatomically pre-contoured for medial closing wedge distal femoral osteotomies, providing rigid internal fixation to address complex knee deformities and osteoarthritis.',
    'Deflexion Osteotomy Plate – Size 1': 'A versatile Size 1 deflexion plate indicated for standard osteotomies, featuring an optimized low-profile design to manage unicompartmental osteoarthritis and general knee deformities.',
    'Deflexion Osteotomy Plate – Size 2': 'Extended Size 2 deflexion osteotomy plate offering increased mechanical strength and stability, specifically indicated for the treatment of pronounced knee deformities and unicompartmental osteoarthritis.',
    'Distal Femoral Derotation Plate – Medial': 'Specialized medial derotation plate for the distal femur, designed to accurately correct torsional deformities and unicompartmental osteoarthritis while ensuring rotational stability.',
    'Distal Femoral Derotation Plate – Lateral': 'Advanced lateral derotation plate providing exceptional torsional control and fixation for distal femoral osteotomies, indicated for complex rotational and coronal deformities.'
};

function updateFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    const $ = cheerio.load(content, { decodeEntities: false });
    
    $('h3.text-xl').each((i, el) => {
        const title = $(el).text().trim().replace(/&amp;/g, '&');
        const p = $(el).next('p');
        
        // Find exact or partial match
        let matched = false;
        for (const [key, desc] of Object.entries(descriptions)) {
            if (title === key || title.includes(key) || key.includes(title)) {
                p.text(desc);
                matched = true;
                break;
            }
        }
        
        if (!matched) {
            console.log(`No match for: "${title}" in ${file}`);
        }
    });
    
    fs.writeFileSync(file, $.html(), 'utf8');
    console.log(`Updated ${file}`);
}

updateFile('products.html');
updateFile('products-2.html');
