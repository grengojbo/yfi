

if(!dojo._hasResource["translations.TemplateView"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
    dojo._hasResource["tranlations.TemplateView"] = true;
    dojo.provide("translations.TemplateView");

(function(){

    translations.TemplateView.phrases     = {
        'Result count': { 
	        'es_ES' : 'Número',
            'af_ZA' : 'Aantal',
            'fr_FR' : 'Total',
	  	    'ms_MY' : 'Bilangan hasil',
		    'nl_NL' : 'Aantal',
            'id_ID' : 'Jumlah',
            'th_TH' : 'จำนวนผลลัพธ์',
		'pt_BR' : 'Total'
           },
        'Vendor': { 
	        'es_ES' : 'Distribuidor',
            'af_ZA' : 'Fabrikant',
            'fr_FR' : 'Fabricant',
	  	    'ms_MY' : 'Pengeluar',
		    'nl_NL' : 'Operator',
            'id_ID' : 'Vendor',
            'th_TH' : 'ผู้ผลิต',
		'pt_BR' : 'Distribuidor'
           },
        'Attribute': { 
	        'es_ES' : 'Atributo',
            'af_ZA' : 'Eienskap',
            'fr_FR' : 'Attribut',
	  	    'ms_MY' : 'Atribut',
		    'nl_NL' : 'Eigenschap',
            'id_ID' : 'Attribute',
            'th_TH' : 'คุณลักษณะ',
		'pt_BR' : 'Atributo'
           },
        'Add': { 
	        'es_ES' : 'Añadir',
            'af_ZA' : 'Voeg By',
            'fr_FR' : 'Ajouter',
	  	    'ms_MY' : 'Tambah',
		    'nl_NL' : 'Toevoegen',
            'id_ID' : 'Tambah',
            'th_TH' : 'เพิ่ม',
		'pt_BR' : 'Adicionar'
           },
        '--Tooltip Goes Here--':{
	        'es_ES' : '--Mensaje Va Aquí--', 
            'af_ZA' : "--Vervang met 'n wenk--",
            'fr_FR' : "--Le message d'aide vient ici",
	  	    'ms_MY' : '--Tip disini--',
		    'nl_NL' : '--Vervang door tooltip--',
            'id_ID' : '--Tips disini--',
            'th_TH' : 'Tooltip ที่นี่',
		'pt_BR' : '--Mensagens Aqui--'
           },
        'Edit selected attribute inside grid':{ 
	        'es_ES' : 'Editar atributo seleccionado dentro de la tabla',
            'af_ZA' : 'Redigeer gekose eienskap in rooster',
            'fr_FR' : "Editer l'élement sélectionné dans le tableau",
	  	    'ms_MY' : 'Ubah atribut terpilih dalam grid',
		    'nl_NL' : 'Wijzig geselecteerde eigenschap in lijst',
            'id_ID' : 'Mengedit attribute terpilih dalam grid',
            'th_TH' : 'แก้ไขคุณลักษณะที่เลือกภายในตาราง',
		'pt_BR' : 'Editar o atributo selecionado dentro da tabela'
           },
        'Attribute name':{ 
	        'es_ES' : 'Nombre atributo',
            'af_ZA' : 'Naam van Eienskap',
            'fr_FR' : "Nom de l'attribut",
	  	    'ms_MY' : 'Nama atribut',
		    'nl_NL' : 'Eigenschap',
            'id_ID' : 'Nama attribute',
            'th_TH' : 'ชื่อคุณลักษณะ',
		'pt_BR' : 'Nome do atributo'
           },
        'Tooltip text':{ 
	        'es_ES' : 'Texto mensaje',
            'af_ZA' : 'Wenk',
            'fr_FR' : "Texte du message d'aide",
	  	    'ms_MY' : 'Tip teks',
		    'nl_NL' : 'Tooltiptekst',
            'id_ID' : 'Tips teks',
            'th_TH' : 'ข้อความ Tooltip',
		'pt_BR' : 'Texto da Mensagem'
           },
        'Check / Reply':{ 
	        'es_ES' : 'Comprobación / Respuesta',
            'af_ZA' : 'Kontroleer / Antwoord',
            'fr_FR' : 'Vérification/Réponse',
	  	    'ms_MY' : 'Check / Reply',
		    'nl_NL' : 'Check / Reply',
            'id_ID' : 'Check/Reply',
            'th_TH' : 'ตรวจสอบ/ตอบกลับ',
		'pt_BR' : 'Check / Reply'
           },
        'Units':{ 
	        'es_ES' : 'Unidades',
            'af_ZA' : 'Eenhede',
            'fr_FR' : 'Unités',
	  	    'ms_MY' : 'Unit',
		    'nl_NL' : 'Eenheden',
            'id_ID' : 'Unit',
            'th_TH' : 'หน่วย',
		'pt_BR' : 'Unidades'
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
        'Created New Billing Plan':{ 
	        'es_ES' : 'Creado Nuevo Plan de Facturación',
            'af_ZA' : 'Nuwe betaalplan geskep',
            'fr_FR' : 'Nouveau plan de facturation crée',
	  	    'ms_MY' : 'Berjaya mencipta Pelan Pembayaran baru',
		    'nl_NL' : 'Nieuw betaalplan aangemaakt',
            'id_ID' : 'Buat rencana billing baru',
            'th_TH' : 'สร้างแผนการเรียกเก็บเงินใหม่',
		'pt_BR' : 'Criar novo Plano de Bilhetagem'
           },
        'Problems creating Billing Plan':{ 
	        'es_ES' : 'Problemas creando Plan de Facturación',
            'af_ZA' : 'Probleme met skep van betaalplan',
            'fr_FR' : 'Des problèmes sont survenus de la création du plan de facturation',
	  	    'ms_MY' : 'Gagal mencipta Pelan Pembayaran baru',
		    'nl_NL' : 'Nieuw betaalplan aanmaken mislukt',
            'id_ID' : 'Pembuatan rencana billing bermasalah',
            'th_TH' : 'มีปัญหาในการสร้างแผนการเรียกเก็บเงิน',
		'pt_BR' : 'Problemas ao criar Plano de Bilhetagem'
           },
        'Opening detail for':{ 
	        'es_ES' : 'Abriendo detalles de',
            'af_ZA' : 'Wys detail vir',
            'fr_FR' : 'Ouverture des détails pour',
	  	    'ms_MY' : 'membuka perincian untuk',
		    'nl_NL' : 'Details openen voor',
            'id_ID' : 'Buka detail untuk',
            'th_TH' : 'เปิดข้อมูลสำหรับ',
		'pt_BR' : 'Abrindo detalhes de'
           },
        'Deleting Billing Plan(s)':{ 
	        'es_ES' : 'Eliminando Plan(es) de Facturación',
            'af_ZA' : 'Verwyder Betaalplanne',
            'fr_FR' : 'Plans de facturation en cours de suppression',
	  	    'ms_MY' : 'Memadam Pelan Pembayaran',
		    'nl_NL' : 'Betaalplan(nen) verwijderen',
            'id_ID' : 'Membuat rencana billing',
            'th_TH' : 'กำลังลบแผนการเรียกเก็บเงิน',
		'pt_BR' : 'Deletando Plano(s) de Bilhetagem'
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
        'Field': {
	        'es_ES' : 'Campo',
            'af_ZA' : 'Veld',
            'fr_FR' : 'Champ',
	  	    'ms_MY' : 'Medan',
		    'nl_NL' : 'Veld',
            'id_ID' : 'Daerah',
            'th_TH' : 'ฟิลด์',
		'pt_BR' : 'Campo'
           },
        'updated to': {
	        'es_ES' : 'actualizado a',
            'af_ZA' : 'vernader na',
            'fr_FR' : 'mis à jour à',
	  	    'ms_MY' : 'diubah ke',
		    'nl_NL' : 'gewijzigd in',
            'id_ID' : 'Di update ke',
            'th_TH' : 'ปรับปรุุงให้เป็น',
		'pt_BR' : 'atualizado para'
           }
    };

})();//(function(){

}
