import { useParams } from "react-router-dom";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useSelector } from "react-redux";

import { selectCompraById } from "../../redux/comprasSlice";
import { selectVendaById } from "../../redux/vendasSlice";
import { selectIngressoById } from "../../redux/ingressosSlice";
import { selectEventoById } from "../../redux/eventosSlice";

import './comprovante.css'

function Comprovante() {
  const { id } = useParams();
  
  const compra = useSelector(state => selectCompraById(state, id));
  const venda = useSelector(state => selectVendaById(state, compra.vendaId));
  const ingresso = useSelector(state => selectIngressoById(state, venda.ingressoId));
  const evento = useSelector(state => selectEventoById(state, ingresso.eventoId));
  
  const styles = StyleSheet.create({
    titulo:{
      margin: "100px 0",
      fontSize: "50px"
    },
    informacao:{
      marginBottom: "20px"
    },
    informacaoImportante:{
      marginTop: "40px"
    },  
    container:{
      width: "100%",
      height: "100%"
    },
    wrapper:{
      textAlign: "center"
    }
  });

  return (
    <PDFViewer style={styles.container}>
      <Document>
        <Page size="A4">
          <View style={styles.wrapper}>
            <Text style={styles.titulo}>Meu Ingresso</Text>
            <Text style={styles.informacao}>{evento.nome}</Text>
            <Text style={styles.informacao}>{ingresso.nome}</Text>
            <Text style={styles.informacao}>{evento.endereco}</Text>
            <Text style={styles.informacao}>{evento.local}</Text>
            <Text style={styles.informacao}>{ingresso.data}</Text>
            <Text style={styles.informacao}>{ingresso.horario}</Text>
            <Text style={styles.informacaoImportante} >{compra.cpf}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Comprovante;