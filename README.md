<h1>Clean Form</h1>
<br> 
<p align="center">
	<img src="http://webmaker.work/form/form2.png" alt="Clear Form"> 
</p>
<br>
<h2>Form template with captcha and an arbitrary number of fields</h2>
<br>
There is no need to modify the php file, all the settings are made in the html
<br>

```html
<!-- Hidden settings fields-->
<!-- Admin name -->
<input class="form-name" type="hidden" name="project_name" value="Your Name">
<!-- Admin e-mail -->
<input type="hidden" name="admin_email" value="Your E-mail">
<!-- E-mail Subject -->
<input type="hidden" name="form_subject" value="New Message">
<!-- End of hidden settings fields -->

<input type="text" name="Name" placeholder="Name" required maxlength="30">
<input type="email" name="Mail" placeholder="E-mail" maxlength="30">
<input type="tel" name="Phone" placeholder="Phone" required maxlength="30">
<select name="Select"><option value="" selected class="first-select">Сhoice</option>
	<option value="First">First</option>
	<option value="Second">Second</option>
	<option value="Third">Third</option>
</select>
<textarea id="message" name="Message" placeholder="Message" maxlength="1000"></textarea>
```
<h3>Demo:</h3>
https://deveb.pro/form/
