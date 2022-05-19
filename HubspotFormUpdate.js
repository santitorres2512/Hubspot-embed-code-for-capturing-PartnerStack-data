<script>
  
  delete isPartnerstack; 
  const QueryString = window.location.search;   //Gets the URL 
  const urlParams = new URLSearchParams(QueryString); 
  const isPartnerstack = urlParams.has('gspk');   //turns to true if it contains gspk key word on URL
  const urlstring = window.location.href
  const gspkfirstpart = urlstring.split('gspk=')[1]  //Splits the string after gspk word
  const gspksecondpart = gspkfirstpart.split('&gsxid=')[0]   // and then splits the result before gsxid key word, for keeping just the gspk
  const gsxidfirstpart = urlstring.split('&gsxid=')[1]  //Applies the same method to parse Gsxid, this one is the last key word, so is only splitted once
  const gspkstring = String(gspksecondpart)
  const gsxidstring = String(gsxidfirstpart)
  const decodedgspk = atob(gspkstring)    //then it decodes the GSPK string, which was in Base 64 encoding format
  const decodedgspkstring = String(decodedgspk)
        
  console.log("gspk: " + gspkstring);
  console.log("gspkdeco: " + decodedgspkstring);
  
  console.log("gsxid : " + gsxidstring);

  if (isPartnerstack) {console.log(urlParams);      //we find if the user comes from partnerstack, using the previously set variable, in case is true will continue
                       console.log('IT COMES FROM PARTNERSTACK');
                        
  setTimeout(()=>{
      console.log("GSPK: " + isPartnerstack);
      
      var input = $('input[name="ps___partnerstack_record"]').val('true').change();     //uses JQuery to update the value on Hubspot for necessary element
      var input = $('input[name="growsumo_partner_key"]').val(decodedgspkstring).change();
      var input = $('input[name="growsumo_xid"]').val(gsxidstring).change();
      
      //var input2 = $('input[name="growsumo_partner_key"]').val('gspkstring').change();
      //$('input[name="growsumo_xid"]').val(gsxidstring).change();   
      //var input = $('input[name="growsumo_xid"]').val(gsxidstring).change();
 	  console.log("Hello " + input.val());
      console.log("gspk: " + gspkstring);  // displays the results on browser console
      console.log("gsxid: " + gsxidstring);
      
      //input.prop('checked', true).change();
      console.log("Changed " + input.val());
  },5000);
}; 

</script>
