using System;
using System.Data;
using PayService.Model.Data.Embed;

namespace PayService.Model.Data
{
	public class Request
	{
		public int Id { get; set; }
		public string IndividualNumber { get; set; }
		public string BankNumber { get; set; }
		public string AccountNumber { get; set; }
		public string PurposeOfPayment { get; set; }
		public Vat Vat { get; set; }
		public int Amount { get; set; }
		public string PhoneNumber { get; set; }
		public string Email { get; set; }
		public DateTime Created { get; set; }

		public Request()
		{

		}

		public Request(string individualNumber, string bankNumber, string accountNumber, string purposeOfPayment, Vat vat,
			int amount, string phoneNumber, string email)
		{
			IndividualNumber = individualNumber;
			BankNumber = bankNumber;
			AccountNumber = accountNumber;
			PurposeOfPayment = purposeOfPayment;
			Vat = vat;
			Amount = amount;
			PhoneNumber = phoneNumber;
			Email = email;
			Created = DateTime.Now;
		}
	}
}