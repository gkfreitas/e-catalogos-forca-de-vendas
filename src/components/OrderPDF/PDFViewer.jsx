import { PDFViewer } from '@react-pdf/renderer';
import { MyPdfDocument } from './MyPdfDocument';

function PdfPreview() {
  return (
    <PDFViewer style={ { width: '100%', height: '90vh' } }>
      <MyPdfDocument />
    </PDFViewer>
  );
}

export default PdfPreview;
