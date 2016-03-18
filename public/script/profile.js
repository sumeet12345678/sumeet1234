
$(document).ready(function () {
	
	
            $('<input type="file" id="fileImage" style="display:none"/>').appendTo("body").change(function () {
                previewImage(this);
            });
            $("#imgPreview").click(function () {
                $("#fileImage").click();
            });

        });
function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgPreview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#btnSaveProfile").click(function(){
$("#spnProfileText").text($("#spnProfileEditText").text());
$("#imgProfilePhoto").attr('src',$('#imgPreview').attr('src'));
$('#divProfileEdit').modal('hide');
});