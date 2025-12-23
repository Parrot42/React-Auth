import './new.css';

function New(props) {

  async function createUser() {
    if (document.getElementById('password').value !== document.getElementById('repeatPassword').value) {
        console.log('Passwords do not match')
        alert('Passwörter stimmen nicht überein!')
        return
    }
    const { data, error } = await props.supabase.auth.admin.createUser({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        email_confirm: true,
        user_metadata: { 
          display_name: document.getElementById('surname').value, 
          name: document.getElementById('name').value,
        }
    })
    if (error) {
        console.log('Error creating user:', error.message)
    } else {
        alert('Benutzer konnte erstellt werden!')
        console.log('User created:', data)
        // const { data2, error2 } = await props.supabase.auth.admin.inviteUserByEmail(document.getElementById('email').value)
        // if (error2) {
        //     console.log('Error inviting user:', error2.message)
        // } else {
        //     console.log('User invited:', data2)
        // }
    }
  }

  return (
    <>
      <div className="form">
        <input type="text" id="surname" className="Username" placeholder="Vorame" />
        <input type="text" id="name" className="Username" placeholder="Nachname" />
        <input type="text" id="email" className="Email" placeholder="Email" />
        <input type="password" id="password" className="Password" placeholder="Passwort" />
        <input type="password" id="repeatPassword" className="Password" placeholder="Passwort wiederholen" />
        <button className="createUserBtn" onClick={createUser}>Benutzer erstellen</button>
      </div>

    </>
  );
}


export default New;
