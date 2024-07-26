// username və email inputları olan sadə bir user form yaradın.
// TypeScript-də, User interface'i yaradın hansı ki, username və email property'ləri olsun
// validateUser adlı funksiya yazın. Funksiya user objectini parameter olaraq qəbul etməlidir, funksiyanın return type'ı string | boolean olacaq
// username və email field'ləri boş ola bilməz, form submit etdikdə fieldlər hər hansısa boş olarsa alert çıxmalıdır (ex: "Username cannot be empty")
// Əlavə olaraq username ən az 5 simvoldan ibarət olmalıdır,
// və email doğru email formatına (regex istifadə edə bilərsiniz) sahib olmalıdır, əks halda uyğun mesajları alert olaraq çıxarmalıdır

// interfaces
interface User  {
  username: string;
  email: string;
};

// validate user
function validateUser(user: User): string | boolean {
  if (!user.username.trim()) {
    return "Username cannot be empty";
  }
  if (user.username.trim().length < 5) {
    return "Username should be at least 5 character";
  }
  if (!user.email.trim()) {
    return "Email cannot be empty";
  }

  //   if (!user.email.includes("@")) {
  //     return "Invalid email format";
  //   }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(user.email)) {
    return "email is incorrect";
  }

  return false;
}

// form submit

const useForm = document.getElementById("user-form") as HTMLFormElement;

useForm.addEventListener("submit", function (e: Event) {
  e.preventDefault();
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  const user: User = {
    username: usernameInput.value,
    email: emailInput.value,
  };

  const validationError = validateUser(user);

  if (validationError) {
    alert(validationError);
  } else {
    alert("Form submitted successfully!");
  }
});
