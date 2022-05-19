<script>
  
  delete isPartnerstack; 
  const QueryString = window.location.search; 
  const urlParams = new URLSearchParams(QueryString); 
  const isPartnerstack = urlParams.has('gspk');
  const urlstring = window.location.href
  const gspkfirstpart = urlstring.split('gspk=')[1]
  const gspksecondpart = gspkfirstpart.split('&gsxid=')[0]
  const gsxidfirstpart = urlstring.split('&gsxid=')[1]
  const gspkstring = String(gspksecondpart)
  const gsxidstring = String(gsxidfirstpart)
  const decodedgspk = atob(gspkstring)
  const decodedgspkstring = String(decodedgspk)
        
  console.log("gspk: " + gspkstring);
  console.log("gspkdeco: " + decodedgspkstring);
  
  console.log("gsxid : " + gsxidstring);

  if (isPartnerstack) {console.log(urlParams);
                       console.log('IT COMES FROM PARTNERSTACK');
                        
  setTimeout(()=>{
      console.log("GSPK: " + isPartnerstack);
      
      var input = $('input[name="ps___partnerstack_record"]').val('true').change();
      var input = $('input[name="growsumo_partner_key"]').val(decodedgspkstring).change();
      var input = $('input[name="growsumo_xid"]').val(gsxidstring).change();
      
      //var input2 = $('input[name="growsumo_partner_key"]').val('gspkstring').change();
      //$('input[name="growsumo_xid"]').val(gsxidstring).change();   
      //var input = $('input[name="growsumo_xid"]').val(gsxidstring).change();
 	  console.log("Hello " + input.val());
      console.log("gspk: " + gspkstring);
      console.log("gsxid: " + gsxidstring);
      
      //input.prop('checked', true).change();
      console.log("Changed " + input.val());
  },5000);
}; 

</script>