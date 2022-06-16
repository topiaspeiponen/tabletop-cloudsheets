import { PDFDocument } from 'pdf-lib'

export const loadPdf = async (fileName : string) : Promise<string> => {
	const existingPdfBytes = await fetch(
		`/${fileName}`
	).then((res) => res.arrayBuffer())
	const pdfDoc = await PDFDocument.load(existingPdfBytes)

	//const fields = pdfDoc.getForm().getFields()
	/*fields.forEach(field => {
		const type = field.constructor.name
		const name = field.getName()
		console.log(`${type}: ${name}`)
	})*/


	const pdfBytes = await pdfDoc.save()
	const bytes  = new Uint8Array( pdfBytes )
	const blob   = new Blob( [ bytes ], { type: 'application/pdf' } )
	const docUrl = URL.createObjectURL( blob )
	//console.log('PDF lib form: ', docUrl)
	return docUrl
}