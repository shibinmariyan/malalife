function isAlphabet(e){return!!(64<e.charCode&&91>e.charCode||96<e.charCode&&123>e.charCode||7<e.charCode&&32>=e.charCode)}function isNumberKey(e){return!(31<e.charCode&&(48>e.charCode||57<e.charCode)&&43!=e.charCode&&8!=e.charCode&&43!=e.charCode&&127!=e.charCode)}$("form").submit(function(e){e.preventDefault(),x,10==$("#mobile").val().length?($("div").remove("#errorID"),mob=$("#mobile").val()):$("#errorID")&&$("#mobile").after('<div id="errorID" class="alert alert-danger">Please enter Valid mobile</div>'),$.ajax({type:"POST",url:"htttp://192.168.1.19:8000/api/astroinfo",data:{username:$("#uname").val(),phonenumber:mob,email:$("#email").val()},success:function(e){$("div").remove(".modal-body"),"0"==e.status?$(".modal-header").after('<div id="errorID" class="alert alert-success">Successfully Submitted<br>We will revote you soon</div><div class="modal-footer"><button type="button" class="btn btn-info" data-dismiss="modal">Close</button></div>'):"1"==e.status&&$("modal-header").after('<div id="errorID" class="alert alert-danger">Something Went Wrong</div><div class="modal-footer"><button type="button" class="btn btn-info" data-dismiss="modal">Close</button></div>')},error:function(){$("div").remove(".modal-body"),$(".modal-header").after('<div id="errorID" class="alert alert-danger">Sending Unsuccesful</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div>')}})});