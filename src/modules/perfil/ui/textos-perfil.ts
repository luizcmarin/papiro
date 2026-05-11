import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosPerfil {
  tituloPagina: string;
  subtituloIce: string;
  guardar: string;
  gravadoOk: string;
  erroBd: string;
  secDados: string;
  secSecretario: string;
  secMedico: string;
  secEmergencia: string;
  secColih: string;
  campoNome: string;
  campoTelefone: string;
  campoEmail: string;
  campoLink: string;
  campoComentario: string;
  campoNomeSecretario: string;
  campoTelSecretario: string;
  campoTipoSanguineo: string;
  campoAlergias: string;
  campoMedicamentos: string;
  campoObsMedicas: string;
  campoRecusaTransfusao: string;
  campoFracoesAceitas: string;
  campoUriDpa: string;
  campoContatoEmergencia: string;
  campoTelEmergencia: string;
  campoNomeColih: string;
  campoTelColih: string;
  campoDpaCategoria: string;
  hintDpaCategoria: string;
}

const PT: TextosPerfil = {
  tituloPagina: 'Perfil e ficha ICE',
  subtituloIce:
    'Dados locais na sua base SQLite. Trate informação médica com cuidado; só preencha o que fizer sentido para si.',
  guardar: 'Guardar perfil',
  gravadoOk: 'Perfil guardado.',
  erroBd: 'Não foi possível guardar. Tente de novo.',
  secDados: 'Dados pessoais',
  secSecretario: 'Secretário de serviço de campo',
  secMedico: 'Informação médica (ICE)',
  secEmergencia: 'Contacto de emergência',
  secColih: 'Coordenador local de informação hospitalar (COLIH)',
  campoNome: 'Nome',
  campoTelefone: 'Telefone',
  campoEmail: 'E-mail',
  campoLink: 'Ligação (URL)',
  campoComentario: 'Comentários',
  campoNomeSecretario: 'Nome do secretário',
  campoTelSecretario: 'Telefone do secretário',
  campoTipoSanguineo: 'Tipo sanguíneo',
  campoAlergias: 'Alergias',
  campoMedicamentos: 'Medicamentos em uso',
  campoObsMedicas: 'Observações médicas',
  campoRecusaTransfusao: 'Recusa de transfusão de sangue',
  campoFracoesAceitas: 'Frações aceites (se aplicável)',
  campoUriDpa: 'URI do documento DPA / digitalização',
  campoContatoEmergencia: 'Nome do contacto de emergência',
  campoTelEmergencia: 'Telefone de emergência',
  campoNomeColih: 'Nome COLIH',
  campoTelColih: 'Telefone COLIH',
  campoDpaCategoria: 'DPA — categoria (valor interno)',
  hintDpaCategoria: 'Campo numérico do modelo; pode deixar 0 se não usar.',
};

const EN: TextosPerfil = {
  tituloPagina: 'Profile & ICE card',
  subtituloIce:
    'Local data in your SQLite database. Enter only medical details you are comfortable storing on this device.',
  guardar: 'Save profile',
  gravadoOk: 'Profile saved.',
  erroBd: 'Could not save. Please try again.',
  secDados: 'Personal details',
  secSecretario: 'Field service secretary',
  secMedico: 'Medical information (ICE)',
  secEmergencia: 'Emergency contact',
  secColih: 'Local hospital liaison (COLIH)',
  campoNome: 'Name',
  campoTelefone: 'Phone',
  campoEmail: 'Email',
  campoLink: 'Link (URL)',
  campoComentario: 'Notes',
  campoNomeSecretario: 'Secretary name',
  campoTelSecretario: 'Secretary phone',
  campoTipoSanguineo: 'Blood type',
  campoAlergias: 'Allergies',
  campoMedicamentos: 'Current medication',
  campoObsMedicas: 'Medical notes',
  campoRecusaTransfusao: 'Refusal of blood transfusion',
  campoFracoesAceitas: 'Accepted fractions (if any)',
  campoUriDpa: 'DPA document URI / scan',
  campoContatoEmergencia: 'Emergency contact name',
  campoTelEmergencia: 'Emergency phone',
  campoNomeColih: 'COLIH name',
  campoTelColih: 'COLIH phone',
  campoDpaCategoria: 'DPA — category (internal value)',
  hintDpaCategoria: 'Numeric field from your template; leave 0 if unused.',
};

export function obterTextosPerfil(locale: LocaleId): TextosPerfil {
  return locale === 'en' ? EN : PT;
}
