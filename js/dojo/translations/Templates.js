

if(!dojo._hasResource["translations.Templates"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
    dojo._hasResource["tranlations.Templates"] = true;
    dojo.provide("translations.Templates");

(function(){

    translations.Templates.phrases     = {
        'Result count': { 
	        'es_ES' : 'Número',
            'af_ZA' : 'Aantal',
            'fr_FR' : 'Total',
	  	    'ms_MY' : 'Bilangan hasil',
		    'nl_NL' : 'Aantal',
            'id_ID' : 'Hasil Perhitungan',
            'th_TH' : 'จำนวนผลลัพธ์',
		'pt_BR' : 'Total'
           },
        'Name': { 
	        'es_ES' : 'Nombre',
            'af_ZA' : 'Naam',
            'fr_FR' : 'Nom',
	  	    'ms_MY' : 'Nama',
		    'nl_NL' : 'Naam',
            'id_ID' : 'Nama',
            'th_TH' : 'ชื่อ',
		'pt_BR' : 'Nome'
           },
        'Available To': { 
	        'es_ES' : 'Disponible Para',
            'af_ZA' : 'Beskikbaar Vir',
            'fr_FR' : 'Disponible pour',
	  	    'ms_MY' : 'Tersedia untuk',
		    'nl_NL' : 'Beschikbaar voor',
            'id_ID' : 'Tersedia untuk',
            'th_TH' : 'ใช้ได้กับ',
		'pt_BR' : 'Disponível Para'
           },
        'Reply Attribute Count':{ 
	        'es_ES' : 'Número Atributo Respuesta',
            'af_ZA' : 'Antwoord Eienskap Telling',
            'fr_FR' : 'Total des attributs de réponse',
	  	    'ms_MY' : 'Bilangan Atribut Reply',
		    'nl_NL' : 'Aantal reply-eigenschappen',
            'id_ID' : 'Jumlah attribute reply',
            'th_TH' : 'นับจำนวนการตอบกลับคุณลักษณะ',
		'pt_BR' : 'Reply Attibute Count'
           },
        'Check Attribute Count':{ 
	        'es_ES' : 'Número Atributo Comprobación',
            'af_ZA' : 'Kontroleer Eienskap Telling',
            'fr_FR' : 'Total des attributs de vérification',
	  	    'ms_MY' : 'Bilangan Atribut Check',
		    'nl_NL' : 'Aantal check-eigenschappen',
            'id_ID' : 'Jumlah check attribute',
            'th_TH' : 'นับจำนวนการส่งตรวจคุณลักษณะ',
		'pt_BR' : 'Check Attribute Count'
           },
        'Add Profile Template':{ 
	        'es_ES' : 'Añadir Plantilla de Perfil',
            'af_ZA' : 'Nuwe Profiel',
            'fr_FR' : 'Ajouter un modèle de profil',
	  	    'ms_MY' : 'Tambah Acuan Profail',
		    'nl_NL' : 'Nieuw profielsjabloon',
            'id_ID' : 'Tambahkan template profil',
            'th_TH' : 'เพิ่มข้อมูลแม่แบบ',
		'pt_BR' : 'Adicionar Modelo de Perfil'
           },
	  'Available to all': {
	        'es_ES' : 'Disponible para todos',
            'af_ZA' : 'Vir almal beskikbaar',
            'fr_FR' : 'Disponible pour tous',
	  	    'ms_MY' : 'Tersedia untuk semua',
		    'nl_NL' : 'Algemeen beschikbaar',
            'id_ID' : 'Tersedia untuk semua',
            'th_TH' : 'สามารถใช้ได้กับทั้งหมด',
		'pt_BR' : 'Disponível para todos'
           },
        'Available only to': {	
	        'es_ES' : 'Disponible solo para',
            'af_ZA' : 'Slegs beskikbaar vir',
            'fr_FR' : 'Disponible seulement pour',
	  	    'ms_MY' : 'Tersedia hanya untuk',
		    'nl_NL' : 'Alleen beschikbaar voor',
            'id_ID' : 'Hanya tersedia untuk',
            'th_TH' : 'สามารถใช้ได้กับ',
		'pt_BR' : 'Disponível somente para'
           },
        'Save': {
	        'es_ES' : 'Guardar',
            'af_ZA' : 'Stoor',
            'fr_FR' : 'Sauver',
	  	    'ms_MY' : 'Simpan',
		    'nl_NL' : 'Opslaan',
            'id_ID' : 'Simpan',
            'th_TH' : 'จัดเก็บ',
		'pt_BR' : 'Salvar'
           },
        'Profile Template added OK':{
	        'es_ES' : 'Plantilla de Perfil añadida OK', 
            'af_ZA' : 'Profiel geskep',
            'fr_FR' : 'Le modèle de profil a été ajouté avec succès',
	  	    'ms_MY' : 'Berjaya menambah Acuan Profail',
		    'nl_NL' : 'Profielsjabloon succesvol toegevoegd',
            'id_ID' : 'Penambahan Template Profil berhasil',
            'th_TH' : 'เพิ่มข้อมูลแม่แบบเรียบร้อยแล้ว',
		'pt_BR' : 'Modelo de Perfil adicionado OK'
           },
        'Problems adding Profile Template':{ 
	        'es_ES' : 'Problemas añadiendo Plantilla de Perfil',
            'af_ZA' : 'Probleme met nuwe Standaard Profiel',
            'fr_FR' : "Des problèmes sont survenus lors de l'ajout du modèle de profil",
	  	    'ms_MY' : 'Gagal menambah Acuan Profail',
		    'nl_NL' : 'Profielsjabloon toevoegen mislukt',
            'id_ID' : 'Penambahan Template Profil bermasalah',
            'th_TH' : 'มีปัญหาในการเพิ่มข้อมูลแม่แบบ',
		'pt_BR' : 'Problemas ao adicionar Modelo de Perfil'
           },
        'Problems creating Billing Plan':{ 
	        'es_ES' : 'Problemas creando Plan de Factutración',
            'af_ZA' : 'Probleme met skep van betaalplan',
            'fr_FR' : 'Des problèmes sont survenus lors de la création du plan de facturation',
	  	    'ms_MY' : 'Gagal mencipta Pelan Pembayaran',
		    'nl_NL' : 'Betaalplan toevoegen mislukt',
            'id_ID' : 'Pembuatan Rencana billing bermasalah',
            'th_TH' : 'มีปัญหาในการสร้างแผนการเรียกเก็บเงิน',
		'pt_BR' : 'Problemas ao criar Plano de Bilhetagem'
           },
        'No Selection made': {
	        'es_ES' : 'No ha seleccionado nada',
            'af_ZA' : 'Niks gekies nie',
            'fr_FR' : 'Aucun élément sélectionné',
	  	    'ms_MY' : 'Tiada pilihan dibuat',
		    'nl_NL' : 'Maak eerst een selectie',
            'id_ID' : 'Anda belum memilih',
            'th_TH' : 'ไม่มีการเลือก',
		'pt_BR' : 'Não há nada selecionado'
           },
        'Deleting Templates':{ 
	        'es_ES' : 'Eliminado Plantillas',
            'af_ZA' : 'Verwyder Standaard Profiel',
            'fr_FR' : 'Modèle(s) en cours de suppression',
	  	    'ms_MY' : 'Memadam Acuan',
		    'nl_NL' : 'Sjablonen verwijderen',
            'id_ID' : 'Menghapus Template',
            'th_TH' : 'กำลังลบแม่แบบ',
		'pt_BR' : 'Deletando Modelos'
           },
        'Complete': {
	        'es_ES' : 'Completo',
            'af_ZA' : 'Voltooid',
            'fr_FR' : 'Terminé',
	  	    'ms_MY' : 'Selesai',
		    'nl_NL' : 'Voltooid',
            'id_ID' : 'Komplit',
            'th_TH' : 'สมบูรณ์',
		'pt_BR' : 'Completo'
           },
        'Problems removing Template(s)':{ 
	        'es_ES' : 'Problemas eliminando Plantilla(s)',
            'af_ZA' : 'Probleme met verwydering',
            'fr_FR' : 'Des problèmes sont survenus lors de la suppression du(des) modèle(s)',
	  	    'ms_MY' : 'Gagal membuang Acuan',
		    'nl_NL' : 'Sjablo(o)n(en) verwijderen mislukkt',
            'id_ID' : 'Bermasalah dalam Menghapus Template',
            'th_TH' : 'มีปัญหาในการลบแม่แบบ',
		'pt_BR' : 'Problemas ao remover Perfil'
           },
        'Opening detail for': {
	        'es_ES' : 'Abriendo detalle de',
            'af_ZA' : 'Wys detail vir',
            'fr_FR' : 'Ouverture des détails pour',
	  	    'ms_MY' : 'Membuka perincian untuk',
		    'nl_NL' : 'Details openen voor',
            'id_ID' : 'Buka detail untuk',
            'th_TH' : 'เปิดข้อมูลสำหรับ',
		'pt_BR' : 'Abrindo detalhes de'
           }
    };

})();//(function(){

}
