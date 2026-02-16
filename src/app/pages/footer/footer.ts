import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  socialLinks = [
    { icon: '👍', url: 'https://facebook.com/baloncesto', label: 'Facebook' },
    { icon: '𝕏', url: 'https://twitter.com/baloncesto', label: 'Twitter' },
    { icon: '🎵', url: 'https://tiktok.com/@baloncesto', label: 'TikTok' },
    { icon: '📸', url: 'https://instagram.com/baloncesto', label: 'Instagram' }
  ];

  footerNavLinks = [
    { label: 'EQUIPOS', route: '/equipos' },
    { label: 'SERVICIO AL CLIENTE', route: '/servicio' },
    { label: 'TÉRMINOS Y CONDICIONES', route: '/terminos' }
  ];

  currentYear: number = new Date().getFullYear();

  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
